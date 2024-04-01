#include <FastLED.h>

const int LED_PIN = 6;
const int NUM_LEDS = 5;
const int brightness = 70;
CRGB leds[NUM_LEDS];

// RGB values for low/high volumes corresponding to each knob
const int high_colors[NUM_LEDS][3] = {{131, 0, 255}, {0, 0, 255}, {0, 255, 0}, {0, 255, 205}, {255,0,0}};
const int low_colors[NUM_LEDS][3] = {{192, 149, 234 }, {143, 143, 250}, {166, 235, 255}, {162, 255, 237}, {161, 240, 151}};

const int NUM_SLIDERS = 5;
const int analogInputs[NUM_SLIDERS] = {A0, A1, A2, A3, A4};

int analogSliderValues[NUM_SLIDERS];

void setup() { 
  FastLED.addLeds<WS2812, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(brightness);

  for (int i = 0; i < NUM_LEDS; i++) {
    leds[i] = CRGB(low_colors[i][0], low_colors[i][1], low_colors[i][2]);
  }

  FastLED.show();

  for (int i = 0; i < NUM_SLIDERS; i++) {
    pinMode(analogInputs[i], INPUT);
  }

  Serial.begin(9600);
}

int colortransition(int index, int color, int multip) {
  int value = 0;
  int steps = 0;
  if (low_colors[index][color] <= high_colors[index][color]) {
    steps = (high_colors[index][color] - low_colors[index][color]) / 20;
    if ((low_colors[index][color] + (steps * multip)) <= high_colors[index][color]) {
      value = low_colors[index][color] + (steps * multip);
    } else {
      value = high_colors[index][color];
    }
  } else {
    steps = (low_colors[index][color] - high_colors[index][color]) / 20;
    if ((low_colors[index][color] - (steps * multip)) <= high_colors[index][color]) {
      value = high_colors[index][color];            
    } else {
      value = low_colors[index][color] - (steps * multip);
    }
  }
  return value;
}

void colorchange(int index, float input) {
  int r = 0;
  int g = 0;
  int b = 0;
  float multipf = (input / 1024) * 20;
  int multip = multipf;
  r = colortransition(index, 0, multip);
  g = colortransition(index, 1, multip);
  b = colortransition(index, 2, multip);
  leds[index] = CRGB(r, g, b);
}

void updateSliderValues() {
  for (int i = 0; i < NUM_SLIDERS; i++) {
    analogSliderValues[i] = analogRead(analogInputs[i]);
    colorchange(i, analogSliderValues[i]);
  }
}

void sendSliderValues() {
  String builtString = String("");
  for (int i = 0; i < NUM_SLIDERS; i++) {
    builtString += String((int)analogSliderValues[i]);
    if (i < NUM_SLIDERS - 1) {
      builtString += String("|");
    }
  }
  Serial.println(builtString);
}

void loop() {
  updateSliderValues();
  sendSliderValues();
  FastLED.show();
  delay(10);
}
