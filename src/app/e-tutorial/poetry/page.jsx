const PoetryPage = () => {
  return (
    <div className="w-full py-6 px-2 lg:py-12 lg:px-20 lg:w-full mx-auto h-full">
      <div className="w-full aspect-video overflow-hidden shadow-lg">
        <iframe
          src="https://www.youtube.com/embed/cs7TemDZSO4"
          title="Siamsin Tutorial - A Day [Poetry]"
          frameborder="0"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-6">
        <div className="aspect-video overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/GyTE17OntVo"
            title="Siamsin Tutorial - The frog and the Nightingale [Poetry]"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="aspect-video overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Tz8xUqbZrOA"
            title="Siamsin Tutorial - Preludes [Poetry]"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="aspect-video overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/-xbwArwOwV0"
            title="Siamsin Tutorial - Song of the Flower [Poetry]-Sir BC Nangpu"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="aspect-video overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/cBiZw6O6SJI"
            title="Siamsin Tutorial - Three years She Grew in Sun and Shower [Poetry]"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default PoetryPage;
