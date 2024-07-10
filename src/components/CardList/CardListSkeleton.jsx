const CardListSkeleton = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="card__container bg-semi-dark animate-pulse" />
      <div className="card__container bg-semi-dark animate-pulse" />
      <div className="card__container bg-semi-dark animate-pulse" />
      <div className="card__container bg-semi-dark animate-pulse" />
      <div className="card__container bg-semi-dark animate-pulse" />
    </div>
  );
};

export default CardListSkeleton;
