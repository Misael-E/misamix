import { Menu } from '@headlessui/react'
import { useState } from 'react'
import { GiRoundKnob } from 'react-icons/gi'

interface KnobProps {
  onSelect: (option: string) => void
}

export const Knob = ({ onSelect }: KnobProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('')

  return (
    <div className="flex items-center justify-center flex-col space-y-4 pt-4">
      <div>
        <GiRoundKnob className="text-[64px]" />
      </div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-purple rounded-md hover:bg-pink-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {selectedOption || 'Select'}
          </Menu.Button>
        </div>
        <Menu.Items className="absolute w-32 mt-2 origin-top-right bg-pink-400 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-purple' : 'text-white'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  onClick={() => {
                    setSelectedOption('master')
                    onSelect('master')
                  }}
                >
                  Master
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-purple' : 'text-white'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  onClick={() => setSelectedOption('discord.exe')}
                >
                  Discord
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-purple' : 'text-white'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  onClick={() => setSelectedOption('spotify.exe')}
                >
                  Spotify
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-purple' : 'text-white'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  onClick={() => setSelectedOption('chrome.exe')}
                >
                  Chrome
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-purple' : 'text-white'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  onClick={() => setSelectedOption('mic')}
                >
                  Mic
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  )
}
