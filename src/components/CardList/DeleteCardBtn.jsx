import { TrashIcon } from '@heroicons/react/24/solid';

const DeleteCardBtn = () => {
  return (
    <button
      type="button"
      className="card__deleteBtn
      pointer-events-none group-hover:pointer-events-auto
      opacity-0 group-hover:opacity-100"
    >
      <TrashIcon className="w-6 h-6" />
    </button>
  );
};

export default DeleteCardBtn;
