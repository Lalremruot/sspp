import React from "react";

const WhatWeDoPage = () => {
  const initiatives = [
    {
      title: "SSPP Foundation Trust",
      description: "Siamsinpawlpi Scholarship Trust was founded in 1994 to support 'promising yet needy' students who qualify for professional courses among its members. The trust then evolved as an auxiliary of Siamsinpawlpi and was renamed as Siamsinpawlpi Foundation Trust (SFT) in 2006. It is managed by a 17 democratically elected Board of Governors for a term of three years from different walks of life who have ardent interest in the welfare of students.",
      stats: "23+ students assisted",
      icon: "🎓"
    },
    {
      title: "SSPP Residential School",
      description: "SSPP Residential School is an English medium school which was established in the year 1998. Upon its inception the school was set up with the aim of attending to the educational needs of the children who were severely affected by the ethnic clash that happened in 1997 in Churachandpur district. The school, in its present state, serves disadvantaged and poor students with no relatives in and nearby the town in its residential educational programme.",
      stats: "Est. 1998",
      icon: "🏫"
    },
    {
      title: "Siamsin Emporium",
      description: "Siamsinpawlpi General Headquarters, with the aim to assist and tap the potential of the educated unemployed among the community through entrepreneurship, initiates to take up an ambitious project of Siamsin Emporium. The bold project aims to bridge the gap between local entrepreneurs and customers in the town by establishing a transit point where sellers display their local produces meanwhile making the products accessible to the buyers.",
      stats: "Budget: ₹10,02,000",
      icon: "🛍️"
    },
    {
      title: "Siamsin Education Initiative",
      description: "Siamsinpawlpi Scholarship Trust was founded in 1994 to support 'promising yet needy' students who qualify for professional courses among its members. The trust then evolved as an auxiliary of Siamsinpawlpi and was renamed as Siamsinpawlpi Foundation Trust (SFT) in 2006.",
      stats: "Since 1994",
      icon: "📚"
    },
    {
      title: "Siamsin Awards",
      description: "Siamsin Awards is an annual activity of Siamsinpawlpi where various meritorious awards are given away to recognize, encourage and honour distinguished academic and professional achievements. The award is given away on January 13 every year along with the commemoration of the Organisation's Foundation Day.",
      stats: "Annual event",
      icon: "🏆"
    },
    {
      title: "Other Projects & Activities",
      description: "Major Activities Undertaken by Siamsinpawlpi Career guidance seminars and workshops are organized by the Organization annually sponsored by government agencies and well-wishers. They are important activities spearheaded by the Education Department.",
      stats: "Multiple initiatives",
      icon: "🌟"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-2 lg:px-4 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">Our Initiatives</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the various programs and projects through which Siamsinpawlpi serves the educational needs of our community.
        </p>
      </div>

      {/* Initiatives Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{initiative.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{initiative.title}</h3>
                <p className="text-sm text-green-600 font-medium mb-4">{initiative.stats}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {initiative.description.slice(0, 150)}...
                </p>
                <button className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors flex items-center">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Content Section */}
      <div className="max-w-6xl mx-auto lg:px-4 mt-20">
        <div className="bg-white rounded-xl shadow-sm p-3 lg:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comprehensive Overview of Our Work</h2>
          
          <div className="space-y-10">
            <div className="border-l-4 border-green-500 pl-2 lg:pl-4 py-1">
              <h3 className="text-xl font-medium text-gray-800 mb-3">SSPP Foundation Trust</h3>
              <p className="text-gray-600 text-justify">
                Siamsinpawlpi Scholarship Trust was founded in 1994 to support 'promising yet needy' students who qualify for professional courses among its members. The trust then evolved as an auxiliary of Siamsinpawlpi and was renamed as Siamsinpawlpi Foundation Trust (SFT) in 2006. It is managed by a 17 democratically elected Board of Governors for a term of three years from different walks of life who have ardent interest in the welfare of students. The trust fund is sourced from voluntary donations from its Patrons, Emeritus, Life Members, Members and other interested individuals. It provides an interest free loan to deserving applicants and has seven assistance categories from Category I to Category VII depending on the amount of assistance given. From its inception, the trust had assisted more than 23 students studying for professional courses in various prestigious institutions. The past recipients of the trust assistance became well placed professionals working in various private and governmental establishments contributing back to the society.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-2 lg:pl-4 py-1">
              <h3 className="text-xl font-medium text-gray-800 mb-3">SSPP Residential School</h3>
              <p className="text-gray-600 text-justify">
                SSPP Residential School is an English medium school which was established in the year 1998. Upon its inception the school was set up with the aim of attending to the educational needs of the children who were severely affected by the ethnic clash that happened in 1997 in Churachandpur district. The school, in its present state, serves disadvantaged and poor students with no relatives in and nearby the town in its residential educational programme.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-1">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Siamsin Emporium</h3>
              <p className="text-gray-600 text-justify">
                Siamsinpawlpi General Headquarters, with the aim to assist and tap the potential of the educated unemployed among the community through entrepreneurship, initiates to take up an ambitious project of Siamsin Emporium. The bold project aims to bridge the gap between local entrepreneurs and customers in the town by establishing a transit point where sellers display their local produces meanwhile making the products accessible to the buyers. Completing its incubation phase, the project is in its initial stage and is receiving donations to meet its proposed budget of Rs 10,02,000/- (Rupees Ten Lakhs and Two Thousand) only from its members, well-wishers and interested investors.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-2 lg:pl-4 py-1">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Siamsin Awards</h3>
              <p className="text-gray-600 text-justify">
                Siamsin Awards is an annual activity of Siamsinpawlpi where various meritorious awards are given away to recognize, encourage and honour distinguished academic and professional achievements. The award is given away on January 13 every year along with the commemoration of the Organisation's Foundation Day. There are three broad categories in the Siamsin Award: Donors Awards: There are 14 sub-categories under this category donated by individual, families and organisations awarded to academic achievers ranging from toppers in Secondary to Graduate and Post Graduate examinations including toppers in specific subjects. Siamsinpawlpi General Headquarters Meritorious Awards: There are 3 sub-categories under this award. These awards are given by Siamsinpawlpi General Headquarters to meritorious academic achievers securing top 10 ranks in Secondary to Post Graduate level examinations including MPhil and Doctorate degree earners. Siamsinpawlpi General Headquarters Honours Awards: There are 3 sub-categories under this award. These awards are given by Siamsinpawlpi General Headquarters to distinguished professionals in the field of education, sports, music, social work and others who have significant impact in the society as a mark of recognition and appreciation. This category includes award for successful individuals in Civil Service and Allied Services.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-2 lg:pl-4 py-1">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Other Projects & Activities</h3>
              <p className="text-gray-600 text-justify">
                Major Activities Undertaken by Siamsinpawlpi Career guidance seminars and workshops are organized by the Organization annually sponsored by government agencies and well-wishers. They are important activities spearheaded by the Education Department. Resource persons for the seminars and workshops are mobilized among intellectual circle as well as within the community and are often without remittance. Various free coaching classes and camps are conducted from time to time for the welfare of the student community who are in active pursuit of their education and career. JNV Class VI Entrance Coaching, Class X Coaching for Board Exams and MPSC Coaching Class are some of the free coaching classes organized. Annual Conference is a regular event of the Organization. Annual conferences are conducted at the Joint Headquarters, Branch and Block levels. Publication of Annual Magazine: The Organization publishes an annual magazine which highlights annual activities of the Organization. It is an initiative for promoting literature, preserving and transmitting socio-cultural values and creating a space for discourse on social issues.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 mt-16 text-center">
        <div className="bg-green-50 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">Support Our Initiatives</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join us in our mission to create educational opportunities and support students in need.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoPage;