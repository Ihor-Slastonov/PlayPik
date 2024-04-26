import { FunnelIcon } from '@heroicons/react/24/solid';

const FilterCategory = () => {
  return (
    <div className="inline-block relative">
      <button
        type="button"
        className="center text-xl p-2 border rounded-md shadow-md 
        hover:border-accent_green duration-500 ease-in-out transition-colors"
      >
        <FunnelIcon className="w-6 h-6 text-accent_green" /> Add
      </button>

      <div className="absolute top-0 -right-[90px] block w-20 h-20 border bg-tr_dark"></div>
    </div>
  );
};

export default FilterCategory;
