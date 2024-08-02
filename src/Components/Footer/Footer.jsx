import { FaFacebook, FaGlobe, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const icons = [
  { icon: <FaFacebook />, url: "https://www.facebook.com/", key: "facebook" },
  { icon: <FaTwitter />, url: "https://www.twitter.com/", key: "twitter" },
  { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/", key: "linkedin" },
  { icon: <FaGlobe />, url: "https://www.google.com/", key: "google" },
];

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="upper-footer bg-main p-10">
          <div className="container flex flex-col md:flex-row md:flex-wrap p-6 text-white">
            <div className="md:w-4/12 p-4 text-center">
              <h2 className="mb-2">LOCATION</h2>
              <p>
                2215 John Daniel Drive <br /> Clark, MO 65243
              </p>
            </div>

            <div className="md:w-4/12 p-4 text-center">
              <h2 className="mb-2">AROUND THE WEB</h2>
              <ul className="flex justify-center">
                {icons.map((i) => {
                  return (
                    <li className=" border rounded-full mx-1 p-2" key={i.key}>
                      <a href={i.url} target="_blank">
                        {i.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="md:w-4/12 p-4 text-center">
              <h2 className="mb-2">ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>

        <div className="lower-footer bg-gray-900 p-2.5 text-white text-center">
          <p className="mt-2.5 mb-4">Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  );
}
