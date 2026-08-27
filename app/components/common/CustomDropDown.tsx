import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function CustomReasonDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    'New patient inquiry',
    'Schedule an appointment',
    'Insurance question',
    'Dental emergency',
    'Something else',
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}>
      <label className="block text-[12.5px] tracking-eyebrow uppercase font-medium text-white mb-2">
        Reason for visit
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="
            w-full
            flex
            items-center
            justify-between
            bg-transparent
            border
            border-white/70
            rounded-xl
            px-4
            py-3
            text-left
            text-[14.5px]
            text-ink
            font-light
            hover:border-coral
            focus:border-coral
            transition-colors
          "
        >
          <span
            className={
              selected ? 'text-white' : 'text-body-2'
            }
          >
            {selected || 'Select an option'}
          </span>

          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>

        <input
          type="hidden"
          name="reason"
          value={selected}
        />

        {open && (
          <div
            className="
              absolute
              left-0
              right-0
              top-full
              mt-2
              bg-panel
              border
              border-line
              rounded-xl
              overflow-hidden
              z-50
              shadow-2xl
            "
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
                className="
                  w-full
                  text-left
                  px-4
                  py-3
                  text-[14.5px]
                  text-white/80
                  hover:bg-bg
                  hover:text-ink
                  transition-colors
                "
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomReasonDropdown