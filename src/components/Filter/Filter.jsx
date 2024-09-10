import usePlaypikStore from '../../zustand/usePlaypikStore';

import CustomSelect from '../common/CustomSelect';

const Filter = () => {
  const {
    categories,
    types,
    setSelectedCategory,
    setSelectedType,
    filterGames,
  } = usePlaypikStore();
  return (
    <div className="relative z-[2] flex items-center gap-12 text-xl">
      <div className="flex items-center gap-6">
        <p
          className="relative inline-block before:absolute before:-inset-1 
        before:block before:-skew-y-3 before:rounded-md before:bg-accent_green"
        >
          <span className="relative text-dark_deep">Categories:</span>
        </p>
        <CustomSelect
          values={['all', ...categories.map(cat => cat.name)]}
          defaultValue="all"
          color="green"
        />
      </div>

      <div className="flex items-center gap-6">
        <p
          className="relative inline-block before:absolute before:-inset-1 
        before:block before:-skew-y-3 before:rounded-md before:bg-accent"
        >
          <span className="relative text-dark_deep">Types:</span>
        </p>
        <CustomSelect
          values={['all', ...types.map(type => type.name)]}
          defaultValue="all"
        />
      </div>
    </div>
  );
};

export default Filter;
