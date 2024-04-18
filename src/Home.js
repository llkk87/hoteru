import { Carousel } from "flowbite-react";
import { SearchFunction, SortFunction } from "./mycomponents";
import bannerbg from "./img/homebanner.png";

function Home({ hotelData, setHotelData, originalHotelData, setOriginalHotelData }) {
  return (
    <>
      <div>
        <Banner
          hotelData={hotelData}
          setHotelData={setHotelData}
          originalHotelData={originalHotelData}
          setOriginalHotelData={setOriginalHotelData}
        />
        <CarouselContainer />
        <LastestHotels />
        <Review />
        <NewsletterForm />
      </div>
    </>
  );
}
export default Home;

function Banner() {
  return (
    <div className=" text-center relative h-[85vh] mb-16">
      <div
        className="bg-[#92C7CF] h-full pt-8 lg:bg-contain bg-cover"
        style={{
          backgroundImage: `url(${bannerbg})`,
        }}
      >
        <p className="text-white text-4xl lg:text-5xl font-bold mt-20 my-6">Book a stay on HOTERU</p>
        <p className="text-white text-xl lg:text-2xl">More spacious. More local. More of why you travel.</p>
      </div>
      <div className="flex justify-center"></div>
    </div>
  );
}

function SearchBar({ hotelData, setHotelData, originalHotelData, setOriginalHotelData }) {
  return (
    <div className="p-8 bg-[#E5E1DA] rounded-3xl absolute top-44 w-4/5">
      <div className="mb-6">
        <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Large input
        </label>
        <input
          type="text"
          id="large-input"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Default input
        </label>
        <input
          type="text"
          id="default-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label for="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Small input
        </label>
        <input
          type="text"
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
}

function CarouselContainer() {
  return (
    <div className="h-[34rem]  mx-10 lg:mx-14 mb-28">
      <h2 className="notTailwind-title text-3xl font-medium mb-6">Explore Popular Travel Destinations</h2>

      <Carousel>
        <div
          className="h-full w-full flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://www.travelandleisure.com/thmb/WDrISq-WVEK8JILtZ1aCfsbcFVk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blossoms-JCBUPDATE0318-bdd7bedb40cb4f1a84d05f98f06bd133.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <div className="mx-32 text-white">
            <p className="text-2xl md:text-5xl mb-4 md:mb-10">Fujikawaguchiko, Japan</p>
            <p className="hidden md:block text-l text-gray-200 lg:text-xl">
              Immerse yourself in the serene landscapes, indulge in traditional hot spring baths, and witness the iconic
              Mount Fuji in all its glory.
            </p>
            <button className="bg-white hover:bg-gray-300 mt-2 md:mt-5 px-2 py-1 rounded-xl text-sm text-gray-700">
              <svg
                className="w-4 h-4 md:w-6 md:h-6 text-[#92C7CF] dark:text-white inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
                <path
                  fill-rule="evenodd"
                  d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414Z"
                  clip-rule="evenodd"
                />
              </svg>{" "}
              Search accommodation
            </button>
          </div>
        </div>

        <div
          className="h-full w-full flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://vir.com.vn/stores/news_dataimages/2022/112022/19/20/03acd959aa8bcb46309093809b42cda1.jpg?rt=20221119200954")`,
            backgroundSize: "cover",
          }}
        >
          <div className="mx-32 text-white">
            <p className="text-2xl md:text-5xl mb-4 md:mb-10">Jifen, Taiwan</p>
            <p className="hidden md:block text-l text-gray-200 lg:text-xl">
              Discover vibrant markets, indulge in local delicacies, and soak in the breathtaking views of the
              surrounding mountains and ocean.
            </p>
            <button className="bg-white hover:bg-gray-300 mt-2 md:mt-5 px-2 py-1 rounded-xl text-sm text-gray-700">
              <svg
                className="w-4 h-4 md:w-6 md:h-6 text-[#92C7CF] dark:text-white inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
                <path
                  fill-rule="evenodd"
                  d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414Z"
                  clip-rule="evenodd"
                />
              </svg>{" "}
              Search accommodation
            </button>
          </div>
        </div>

        <div
          className="h-full w-full flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://www.visitsingapore.com/content/dam/desktop/global/see-do-singapore/recreation-leisure/merlionpark_carousel1_1670x940.jpeg")`,
            backgroundSize: "cover",
          }}
        >
          <div className="mx-32 text-white">
            <p className="text-2xl md:text-5xl mb-4 md:mb-10">Marina Bay, Singapore</p>
            <p className="hidden md:block text-l text-gray-200 lg:text-xl">
              Experience the dazzling allure. Visit iconic landmarks, indulge in world-class dining, and immerse
              yourself in the vibrant nightlife.{" "}
            </p>
            <button className="bg-white hover:bg-gray-300 mt-2 md:mt-5 px-2 py-1 rounded-xl text-sm text-gray-700">
              <svg
                className="w-4 h-4 md:w-6 md:h-6 text-[#92C7CF] dark:text-white inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
                <path
                  fill-rule="evenodd"
                  d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414Z"
                  clip-rule="evenodd"
                />
              </svg>{" "}
              Search accommodation
            </button>
          </div>
        </div>

        <div
          className="h-full w-full flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://media.cntraveler.com/photos/5a6f78b7abbf37393aaae64a/16:9/w_2560%2Cc_limit/Insadong-GettyImages-691361168.jpg)`,
            backgroundSize: "cover",
          }}
        >
          <div className="mx-32 text-white">
            <p className="text-2xl md:text-5xl mb-4 md:mb-10">Seoul, South Korea</p>
            <p className="hidden md:block text-l text-gray-200 lg:text-xl">
              Enjoy vibrant city life, discover rich cultural heritage, indulge in delectable cuisine, and embrace the
              warmth of Korean hospitality.
            </p>
            <button className="bg-white hover:bg-gray-300 mt-2 md:mt-5 px-2 py-1 rounded-xl text-sm text-gray-700">
              <svg
                className="w-4 h-4 md:w-6 md:h-6 text-[#92C7CF] dark:text-white inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
                <path
                  fill-rule="evenodd"
                  d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414Z"
                  clip-rule="evenodd"
                />
              </svg>{" "}
              Search accommodation
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

function LastestHotels() {
  return (
    <div className="mt-10 px-10 py-10 w-auto shadow-2xl rounded-3xl mx-10 lg:mx-14">
      <h2 className="notTailwind-title text-3xl font-medium">Lastest Hotels</h2>
      <ul className="flex justify-start overflow-scroll">
        <LastestHotelCard />
        <LastestHotelCard />
        <LastestHotelCard />
        <LastestHotelCard />
        <LastestHotelCard />
        <LastestHotelCard />
        <LastestHotelCard />
      </ul>
    </div>
  );
}

function LastestHotelCard() {
  return (
    <li className="w-52 mx-2 mb-2">
      <img
        src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/9e51d564-cc30-4a2a-ab14-809d6deede87-1604146952201-3950d28982374ab237d1e13478487cd9.jpg"
        alt=""
        className="sm:h-40 notTailwind-hotel-image mt-10 min-h-52 min-w-52 bg-gray-500 rounded-3xl"
      />
      <div className="notTailwind-title mt-5 text-lg leading-tight">Yana Villas Kemenuh by Pramana Villas</div>
    </li>
  );
}

function Review() {
  return (
    <div className="mt-10  py-10 w-auto rounded-3xl mx-10 lg:mx-14">
      <h2 className="notTailwind-title text-3xl font-medium mb-6">Reviews From Our Customers</h2>

      <div className="sm:flex sm:flex-col md:grid grid-cols-2 gap-4">
        <article className="shadow-lg p-4 rounded">
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 me-4 rounded-full"
              src="https://www.delltechnologies.com/uploads/2021/07/s_6F9FA8C635E5B49A4AA9474CB76D1146BC1F6408CE5EEC320713FFF4758F98B5_1569007594455_003454-300x300.jpg"
              alt=""
            />
            <div className="font-medium dark:text-white">
              <p>
                Aishwarya Patel{" "}
                <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">
                  from India
                </time>
              </p>
            </div>
          </div>
          <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">The best hotel app ever!</h3>
          </div>
          <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
            <p>
              Reviewed on <time datetime="2024-03-03 19:00">March 3, 2024</time>
            </p>
          </footer>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            I must say, HOTERU exceeded my expectations. The user interface is intuitive and user-friendly, making the
            booking process a breeze. The app offers a wide range of hotels to choose from, and the search filters
            helped me find the perfect one.
          </p>
        </article>

        <article className="shadow-lg p-4 rounded">
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 me-4 rounded-full"
              src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-07.jpg"
              alt=""
            />
            <div className="font-medium dark:text-white">
              <p>
                Jese Leos{" "}
                <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">
                  from United Kingdom
                </time>
              </p>
            </div>
          </div>
          <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">It saves a lot of time.</h3>
          </div>
          <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
            <p>
              Reviewed on <time datetime="2024-02-23 19:00">Feburary 23, 2024</time>
            </p>
          </footer>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            HOTERU saved me a lot of time by suggesting hotels that matched my requirements perfectly. The reviews and
            ratings provided by other users were helpful in making informed decisions.
          </p>
        </article>

        <article className="shadow-lg p-4 rounded">
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 me-4 rounded-full"
              src="https://images-ng.pixai.art/images/orig/7c13e141-dc77-4bc6-b245-5ca0d9286efb"
              alt=""
            />
            <div className="font-medium dark:text-white">
              <p>
                Sakura Tanaka{" "}
                <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">
                  from Japan
                </time>
              </p>
            </div>
          </div>
          <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
              I would love to use HOTERU again.
            </h3>
          </div>
          <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
            <p>
              Reviewed on <time datetime="2024-03-03 19:00">March 3, 2024</time>
            </p>
          </footer>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            HOTERU's search filters based on amenities, and price range made it effortless to narrow down my search. The
            detailed hotel profiles, complete with photos and customer reviews, helped me make an informed decision.
            私は日本人じゃない 助けて 😊
          </p>
        </article>

        <article className="shadow-lg p-4 rounded">
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 me-4 rounded-full"
              src="https://images.generated.photos/ffmrWFXYeLdluznY9r488qUtM0SYPwg5WwrTzYXOB4w/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjIwNjc4LmpwZw.jpg"
              alt=""
            />
            <div className="font-medium dark:text-white">
              <p>
                Zhang Yu{" "}
                <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">
                  from Mainland China
                </time>
              </p>
            </div>
          </div>
          <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Good interface & easy to use</h3>
          </div>
          <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
            <p>
              Reviewed on <time datetime="2017-03-03 19:00">March 19, 2024</time>
            </p>
          </footer>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            The app's seamless booking process, secure payment options, and prompt confirmation made me feel at ease
            throughout. I highly recommend this hotel app for its user-friendly interface and comprehensive features. Nǐ
            zhīdào wǒ wèile kāifā zhège wǎngzhàn xīshēngle duōshǎo shuìmián ma? Lǎozi mìng dōu kuài méiliǎo 🥳
          </p>
        </article>
      </div>
    </div>
  );
}

function NewsletterForm() {
  return (
    <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-2 pe-4 mb-7 text-sm hover:text-[#426c73] hover:bg-[#e2f8fb] rounded-full bg-[#92C7CF] text-white"
        >
          <svg
            className="w-6 h-6 text-[#f3de56] dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
          </svg>
          <span className="text-sm font-medium py-1 px-3">Our Membership Program was launched! See what's new</span>
          <svg
            className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 lg:text-5xl  dark:text-white">
          Stay up to date with us!{" "}
        </h1>
        <p className="mb-8 text-l font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
          Subscribe to our newsletter and be the first to know about the latest hotel deals, travel tips, and exclusive
          offers.
        </p>
        <form className="w-full max-w-md mx-auto">
          <label for="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Email sign-up
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="email"
              id="default-email"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#426c73] focus:border-[#426c73] dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email here..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-[#92C7CF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
