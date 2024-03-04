import { useState } from 'react';
import PreviewCard from '../PreviewCard/PreviewCard';
import AddGameForm from './AddGameForm';

const AddGame = () => {
  const [imgURL, setImgURL] = useState(null);
  return (
    <>
      <h2 className="text-2xl text-center mb-4">Fill in the form</h2>
      <div className="flex gap-6">
        <PreviewCard imgURL={imgURL} />
        <AddGameForm setPreviewImage={setImgURL} />
      </div>
    </>
  );
};

export default AddGame;
