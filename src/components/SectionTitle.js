const SectionTitle = ({title}) => {
  return (
    <div className="py-10">
      <p className="lg:text-9xl text-5xl dark:text-neutral-800 text-gray-200 -mb-7  lg:-mb-12 lg:-ml-2 tracking-widest font-bold uppercase">
        {title}
      </p>
      <h2 className="lg:text-6xl uppercase tracking-widest font-bold text-xl text-violet-600">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
