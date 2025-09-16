import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60 z-10" />
        <Image
          alt="About Siamsinpawlpi"
          src="/Images/sspp-icon.jpg"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-green-300 text-lg md:text-xl font-medium mb-2">
            Know us better
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <div className="w-24 h-1 bg-green-400 rounded-full"></div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 px-2 md:px-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-2 md:p-8 lg:p-10">
          <p className="text-lg md:text-xl text-gray-700 text-justify leading-relaxed">
            Siamsinpawlpi, or SSPP in abbreviated form, is a students' welfare
            organisation founded on the principle of philanthropy and
            volunteerism and formed upon the motto of{" "}
            <span className="font-semibold text-green-700">
              LEARN, LABOUR AND SERVE
            </span>
            . It endeavours to cater to the need of the, otherwise deprived,
            first generation learning community in order to create an
            educationally conducive and more enabling environment among the
            Paites in particular and its kindred communities in general. The
            Organisation is headquartered at
            <strong className="text-gray-900 font-bold">
              {" "}
              SSPP Complex, Siloam Veng, Bungmual, Lamka – 795006, Manipur
            </strong>
            .
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-12">
            Our Reach & Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "1", label: "General Headquarters" },
              { number: "8", label: "Blocks" },
              { number: "20", label: "Branches" },
              { number: "47", label: "Units" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <span className="text-4xl md:text-5xl font-bold text-green-700">
                  {stat.number}
                </span>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="md:w-2/3">
            <Image
              alt="SSPP History"
              src="/Images/sspp-icon.jpg"
              width={800}
              height={600}
              className="rounded-lg w-full shadow-md object-contain h-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              History of Siamsinpawlpi
            </h2>
            <p className="text-gray-700 text-justify leading-relaxed">
              Siamsinpawlpi is a students' welfare organisation founded to
              attend the educational and developmental needs of the students. It
              was established on{" "}
              <span className="font-semibold">13th January, 1947</span> at
              Mission Compound, Churachandpur, Manipur. With the motto of Learn,
              Labour & Serve, the Organisation initially aims to instil the
              spirit of education among the first generation learning community.
            </p>
            <p className="text-gray-700 text-justify leading-relaxed mt-4">
              Christianized and introduced to education, the South District of
              Manipur was then critically underserved. First generation
              educationists and students felt the need to introduce community
              based initiative to assist, guide and encourage the educational
              endeavour of the learning community which gave birth to the
              Organisation.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-8">
            Registration & Recognition
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { org: "Society Act XXI of 1860", id: "Regd. No. 1107 of 1972" },
              {
                org: "Dept of Social Welfare (Manipur)",
                id: "Regd. No. 149 WCP of 1998",
              },
              {
                org: "Ministry of Home Affairs (FCRA)",
                id: "Regd. No. 194160049",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-green-700">
                  {item.org}
                </h3>
                <p className="mt-2 text-gray-600">{item.id}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anthem Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-2 text-center">
          Organization Anthem
        </h2>
        <div className="w-24 h-1 bg-green-600 rounded-full mx-auto mb-10"></div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 bg-green-50 p-6 md:p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              SIAMSINPAWLPI LAPI
            </h3>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Aphuak tu:</span> V. Khoikhandai
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                Tanglai siamsin tukawl tawi a vailou kuan hi.
                <br />
                Sungneek bansam vuallai a zehzum
                <br />
                Zaitha nuam dia siambang sinna sumtawng haampi
                <br />
                Sangkap simtam vual nibang elna
                <br />
                Laltang patbang sai thanmual suahna hi
              </p>

              <p className="italic">
                Siansimthu ni bang hong taang i gamlei ah
                <br />
                Zata suihlung bilbang thousak
                <br />
                Khangpan seinou vualte vabang phawng
                <br />
                Siamsin lunggeel khang theibang lou ta e..
                <br />
                SIN IN, SEM IN, ZUN IN chi in
                <br />
                Hantoh simthu tong hon zek SIAMSINPAWLPI
              </p>

              <p>
                A mel chikna lah meikuang toh
                <br />
                Machiang huai
                <br />
                A sulzui a siamsin mabang pante
                <br />
                Nuachiang a I phungpi huai ding
                <br />
                A khan lumsuang bang tou hen
                <br />
                SIAMSINPAWLPI
                <br />
                Lumbang sung aw biak tung Thianmang
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="bg-green-800 text-white p-8 rounded-lg w-full">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="mb-4">
                To create an educationally conducive and enabling environment
                for first-generation learners through philanthropy and
                volunteerism.
              </p>
              <h3 className="text-xl font-semibold mb-4 mt-6">Our Vision</h3>
              <p>
                To empower students from underserved communities through
                education, guidance, and support, fostering a spirit of
                learning, labor, and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preamble Section */}
      <section className="py-12 md:py-16 bg-green-800 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Preamble
          </h2>

          <div className="bg-green-700/30 backdrop-blur-sm p-6 md:p-8 rounded-lg mb-10">
            <p className="text-lg md:text-xl text-justify italic leading-relaxed mb-6">
              We members of the Siamsinpawlpi hereby solemnly resolve to educate
              ourselves in various fields of learning, develop our skills,
              encourage ourselves towards manual labour, train ourselves in
              various constructive games & sports, faith in behaviour,
              laborious, truthful and God-fearing; work for the good of the
              society, commit ourselves to the nation, cooperate with other
              students' welfare organizations, strive forward unitedly.
            </p>

            <div className="text-center">
              <p className="text-2xl font-bold mb-4">
                We pledge to our motto –
              </p>
              <p className="text-3xl font-bold text-green-300">
                Learn, Labour and Serve.
              </p>
            </div>

            <div className="text-center mt-8">
              <p className="text-xl">O God, Help us.</p>
            </div>
          </div>

          <div className="bg-white text-green-900 p-6 md:p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-6">
              TUP LEH NGIMTE PULAAKNA
            </h3>

            <div className="space-y-4 text-justify">
              <p>
                Laisiamna lam tuamtuam a khangtou a,
                <br />
                Khutsiamna lam tuamtuam a khangtou a,
                <br />
                Khut nasep silbawllam a kihanthawn a,
                <br />
                Kimawlna Siangthou a kihanthawn a,
                <br />
                Gamtatdan a ginom a, kuhkal a, muanhuai a,
                <br />
                Pathian limsak a,
                <br />
                Khantouhna lam tuamtuam a pan la a,
                <br />
                Khentuam neilou a diktatna toh
              </p>

              <p>
                Khotaang Hoihna dia seem a,
                <br />
                Nam leh Gam adia phatuamngai a,
                <br />
                Siamsinpawl tuamtuam toh kitheisiam leh
                <br />
                Pangkhawm a na seem ding in
              </p>

              <p>
                Sin in, Seem in, Zuun in chih thupi a nei in,
                <br />
                Hiai Danbupi, Pawlpi Kivaihawmna ding in
                <br />
                Ka pom un, ka sangta uh hi.
              </p>

              <p className="text-center text-xl font-semibold mt-6">
                Pathian aw hon panpih in!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Our Mission
          </h2>
          <p className="text-lg mb-8">
            Become part of an organization that's making a difference in
            students' lives through education and community support.
          </p>
          <button className="bg-white text-green-800 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-100 transition-colors">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
}
