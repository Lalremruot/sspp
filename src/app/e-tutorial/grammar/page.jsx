const GrammarPage = () => {
  return (
    <div className="w-full px-2 py-6 lg:py-12 lg:px-20 mx-auto">
      {/* Main video */}
      <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.youtube.com/embed/RfbmaagqM1s"
          title="Siamsin Tutorial - Speech [ English Grammar ]"
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Grid of more videos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-6">
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/fiNL68zKhE0"
            title="Siamsin Tutorial - Voice [English Grammar]"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/uY5u224b8a0"
            title="Siamsin Tutorial - Tense [English Grammar]"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GrammarPage;
