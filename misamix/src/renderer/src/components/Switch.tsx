interface SwitchProps {
  isToggled: boolean
  onToggle: () => void
}

export const Switch = ({ isToggled, onToggle }: SwitchProps) => {
  return (
    <div
      className={`${
        isToggled ? 'bg-purple-600' : 'bg-gray-200'
      } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none`}
      role="checkbox"
      tabIndex={0}
      aria-checked={isToggled}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onToggle()
        }
      }}
    >
      <span
        className={`${
          isToggled ? 'translate-x-5' : 'translate-x-0'
        } inline-block w-5 h-5 transform bg-white rounded-full transition-transform ease-in-out duration-200`}
      />
    </div>
  )
}
