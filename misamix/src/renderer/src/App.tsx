import { Content, KnobSelection, RootLayout } from '@/components'
import { Switch } from './components/Switch'
import { useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import { Knob } from './components/KnobSelection'

function App(): JSX.Element {
  const [isToggled, setIsToggled] = useState<boolean>(false)
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({
    knob1: '',
    knob2: '',
    knob3: '',
    knob4: '',
    knob5: ''
  })
  const handleToggle = () => {
    setIsToggled((prev) => !prev)
  }

  const handleSelect = (knob: string, option: string) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [knob]: option
    }))
  }
  return (
    <RootLayout>
      <Content className="border-l border-l-white/20">
        <div className="">
          <h1 className="uppercase font-mono text-center font-bold text-3xl underline pt-4">
            Knob Mapping
          </h1>
          <div className="flex justify-center space-x-4">
            <Knob onSelect={(option) => handleSelect('knob1', option)} />
            <Knob onSelect={(option) => handleSelect('knob2', option)} />
            <Knob onSelect={(option) => handleSelect('knob3', option)} />
            <Knob onSelect={(option) => handleSelect('knob4', option)} />
            <Knob onSelect={(option) => handleSelect('knob5', option)} />
            <div className="flex items-center justify-center flex-col space-y-4">
              <IoIosAddCircle className="text-[32px]" />
            </div>
          </div>
        </div>

        <div className="items-center justify-center">
          <span className="mr-2 uppercase">Invert Knobs:</span>
          <Switch isToggled={isToggled} onToggle={handleToggle} />
        </div>
      </Content>
    </RootLayout>
  )
}

export default App
