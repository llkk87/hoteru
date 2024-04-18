import { Carousel } from "flowbite-react";
import { SearchFunction, SortFunction } from "./mycomponents";
import bannerbg from "./img/homebanner.png";

function Home({ hotelData, setHotelData, originalHotelData, setOriginalHotelData }) {
  const lastelHotels = [
    {
      type: "vacation rental",
      name: "Yana Villas Kemenuh by Pramana Villas",
      gps_coordinates: {
        latitude: -8.555330276489258,
        longitude: 115.28772735595703,
      },
      check_in_time: "2:00 PM",
      check_out_time: "12:00 PM",
      rate_per_night: {
        lowest: "$36",
        extracted_lowest: 36,
        before_taxes_fees: "$30",
        extracted_before_taxes_fees: 30,
      },
      total_rate: {
        lowest: "$36",
        extracted_lowest: 36,
        before_taxes_fees: "$30",
        extracted_before_taxes_fees: 30,
      },
      prices: [
        {
          source: "Tiket.com",
          logo: "https://www.gstatic.com/travel-hotels/branding/be7f980c-6153-4e5f-a4f8-03adb19764e9.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$43",
            extracted_lowest: 43,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
          transportations: [
            {
              type: "Taxi",
              duration: "58 min",
            },
            {
              type: "Public transport",
              duration: "2 hr 22 min",
            },
          ],
        },
        {
          name: "Warung Bu Mangku Sumampan",
          transportations: [
            {
              type: "Walking",
              duration: "2 min",
            },
          ],
        },
      ],
      extracted_hotel_class: 5,
      images: [
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/LRDW9oGz8oY9Pzis9Nli9yvOULgbnSqHd8tsg4mwHwLpBvCcm08r8F8xzFl9q5gymyiKlzBNNXdOqXPRR_mmBQndFePSlxDJcI7NSdSXR6wu8o3i-E7-nZiRnPJ2-BSmBpI8EDFMZjDBOkIBbRYcWfYP76b29g=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/9e51d564-cc30-4a2a-ab14-809d6deede87-1604146952201-3950d28982374ab237d1e13478487cd9.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/1DpPI6Ipxyb3hCE5eBcnPWRiMvGGSgu-h50VkgCT_1ooT9mIPUIP2PvnfVHtHKpVCMJ6eG5x-lsYZRy4_cVg74cgY5qvDp-toQeT9bhkaSv15tUpFqVz8B0hr4JPdDsb6q-3Y_XJRhZmMuFVvLd0RU5Kg7GDqww=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/223247563.jpg?k=17e4b19b4710d224007544d313b2e012e33475d53877bdea8cf036d8f6a60c1c&o=",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/PiSxVQrAjsLKBM18h8objWITzM37rXjMMnIylygxSxB_g_7IZmDRrREDBQjacJN_K5PBZmQ5S1IOXP9l1q6pFWrtCs3kg_0kp4RQ90Kq52d32oogb0NFCjTQb8gBBQXBJDgS-HrDJQ1upNeB59Xkcg9FLdu1YNY=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/62a7570a-038f-4a93-890b-0f5bde8c73ce-1615552537428-6705bbf7d1509c2b51f817ae2c5dbde5.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/FFCMid0hDIRhzQfCR9quBedqGxG4r58MwJQfVrCV7LabGkChQuMHViN4zosO_XB628HVUxpyjSOKtMEf-uZBvmelNy1oYIxwVGdUjtFg85nI-cAnzcaUWAVzFMMNoH2zfIA-GuZoM0KsjGXlL6u8aWp_p9RQNJk=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/223247454.jpg?k=1885fc330aa9aeef0a8af056359e7a62f6fa76df3a2600d96ce802a2e42bff15&o=",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/O18Vy5dlq_ZmpZSGaLNlzqc1g0TZQnhDEdsaJM7mmr_3W05enCQDF3UQWWaMhlshoZDGan87dYDlP9LlI9w7xOZaB5xDrU3IrHm6HxW-k6gTO0MdcbCKT36PL0JugjrK3oXC7dSrAl0gJ-iXBVB9qZMMyRjkkw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/cfda2f11-77e9-44d2-898c-3977e913e8b4-1615553747878-c138e217dfd595c8ce82b3b7af516639.jpg",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/2RH7_YGSJo3flrTuLo2MPD6mDjATZz7DwKwO0FFnKiVOjrsA2LdPm0xEnPaSEwvntSzZEx60SN0Ef_JeEW5o-dfx4Eh_5wgnm32EdhjtrWzJ5lsFk1qmR7H7-MO1_vgr_hQfYvuXn5B6HT_0Pvt7Ahh6DvZg1qA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/223247457.jpg?k=088c0d7f3a35bec8af999bb51090e3c850cd747b22c15fcda8461e5a7786e741&o=",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/B_3d1iDT9e0UHNYq936gUZD5h3qxdegqr4LzVOoXHSW5lFQlnW0TUYmxAYMwUFlAwibR-2vIzF1-8mEel58EM1qUlKSqPiZvIOC9FgkvpE8XDDsPTMpzmyKneI841igJsF-mFwowKbL8gUPKUX64_vwTNndYBzE=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/4940b57e-408e-4cf5-83e0-18de389249b8-1615556133537-4a62fb32d251d67fbe3a71b0a3802c75.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/L7y1G1uszmfblyB3fbND3ZG8akCZn-bfnHKFcgri_eTA6IVKpfPVWqThIYyw7Y8H8d2IK4Kzln7j06RW491Xa1tdeiTgX9p9nGAUxHpNLtxC-6BsTgqDuVB2jDh_AV6Sd1P9dXymfbMI-S8dx4x65-PlcZo9aGA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/04/30/7d49baf6-c7d4-4f7d-a1fd-bf68fed512d8-1682813677553-41a9fc31833674406933afa9841d97db.jpg",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/djXHV_tjczCy0QeLIsew7WlVkWuPxGv8dMJ0mqX2lYl649YJjWBLuhRQ_lwIT3C5vzmrrQPF-J2eHCMreRnpsydcQWhpNidx_iYJELiHJykpBWzwYzXPBVN2wU2pYPJaB6wlZ3MEc232i4OFttQwSelzoLi7Zw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/09/21/d6af8250-1723-4d46-ab26-25cca5f40aab-1695312877059-67c7a973e597f1d9ffab5b4b83a46a50.jpg",
        },
      ],
      overall_rating: 4.6,
      reviews: 152,
      location_rating: 3.2,
      amenities: [
        "Air conditioning",
        "Airport shuttle",
        "Balcony",
        "Crib",
        "Fitness center",
        "Ironing board",
        "Outdoor pool",
        "Smoke-free",
        "Cable TV",
        "Washer",
        "Wheelchair accessible",
        "Free parking",
        "Free Wi-Fi",
      ],
      excluded_amenities: [
        "No beach access",
        "Not kid-friendly",
        "No elevator",
        "No fireplace",
        "No heating",
        "No hot tub",
        "No indoor pool",
        "No kitchen",
        "No microwave",
        "No outdoor grill",
        "No oven stove",
        "No patio",
        "Not pet-friendly",
      ],
      essential_info: ["Entire house", "Sleeps 2", "1 bedroom", "1 bathroom", "1 bed", "215 sq ft"],
      property_token: "ChoQv-izufPTnqvYARoNL2cvMTF0eHFtazYyXxAC",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChoQv-izufPTnqvYARoNL2cvMTF0eHFtazYyXxAC&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Paisa Ubud - Signature Double Room",
      gps_coordinates: {
        latitude: -8.503179550170898,
        longitude: 115.24761962890625,
      },
      check_in_time: "2:00 PM",
      check_out_time: "12:00 PM",
      rate_per_night: {
        lowest: "$25",
        extracted_lowest: 25,
        before_taxes_fees: "$20",
        extracted_before_taxes_fees: 20,
      },
      total_rate: {
        lowest: "$25",
        extracted_lowest: 25,
        before_taxes_fees: "$20",
        extracted_before_taxes_fees: 20,
      },
      prices: [
        {
          source: "Hotels.com",
          logo: "https://www.gstatic.com/travel-hotels/branding/7725599522425217147.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$25",
            extracted_lowest: 25,
            before_taxes_fees: "$20",
            extracted_before_taxes_fees: 20,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
          transportations: [
            {
              type: "Taxi",
              duration: "1 hr 8 min",
            },
            {
              type: "Public transport",
              duration: "2 hr 39 min",
            },
          ],
        },
        {
          name: "Betutu ubud 1",
          transportations: [
            {
              type: "Walking",
              duration: "2 min",
            },
          ],
        },
      ],
      extracted_hotel_class: 4,
      images: [
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/OJevpAXMx_7PkVdX_oD7EJ5GMrN91JsbQd7F1fYXJ4QzFdpjXmzNFCroJhEs5KzFOqYnESCOphpqFE2JPEYSu0v9IqWQBpHhc-YmuuTcxf-Cu3mWNrJX6EmI2k-6UYIYrNhYcb0pZEm_pUJoWCtHZBOePLJBBQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://metasearch-cdn.azureedge.net/remote/i.travelapi.com/lodging/94000000/93120000/93115200/93115104/172eca37_z.jpg",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/E6Kov3A8249NhNBQRCtgewa2g4ZUvuybRCO0sACuyS98yoRf3GrUe5Lbp1EDtSzNqGwVFG5saZK3872LbCbMaIyEripsttcdlQgEgDrMqHv7K-KTqnHe6eaKQOTYKjdJ0c6k4BT3e4eaus8Yp7XfLZtRhyuVAQ=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/94000000/93120000/93115200/93115104/487027d4_z.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/EiV9mFVi_nDHPUpv0o8vmA3wF390UXUjb7R2qPZnxXod_uQP3HhWoKBg4nAfYsksEvzRubuz7yS5306BOcRQ0v3vjrVFW963MHGKFytsinJmKbW1FOH8Jfls4_euUC7VgQA0ZwBXq6sSHEsmzPGT54ID1sCrnN4=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/94000000/93120000/93115200/93115104/61627cbd_z.jpg",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/l6ooqOgTsMduz3dHrzB5sWOgm9ebLPvzSXug0to9HOhQUv7QN1JAST9erXRHsHro7gyFXjwQsETPxZ2rWaQF9hOugZbhPENKQCuD_R3OujUSm2PfM-ItW7B-V3DU8ZgqrAed49xWJuOG3-q-ZXaec9KNof6R5ZE=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/94000000/93120000/93115200/93115104/8d58c67d_z.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/YvLJ0aeKim_nxb8UZfuw9f59CDnnWx3DEa5XdGsGOsGHE-PnN44fKJ97h3XhbOFnREBXPiwvmqFsc2ltfrzz1eSaEhdQpf0D71--gKNJRTXJaGBWrhjsfhsmasnveHn4LEHa7xCnEuA5JyPllcjAuTh2lXyWhg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://metasearch-cdn.azureedge.net/remote/i.travelapi.com/lodging/94000000/93120000/93115200/93115104/eca96e8d_z.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/3ot-sJq-zC08guQOdXyrads6fybECoTsXL1-6Q2S_qscQV-FzHjDwLgC5Vu1HzdqRGDIkn9CxFT76NOqmK8m0bKxarCsMTFp7UwlRA2hgaiPSEEWswrUaJ2V7a7mfrRaSINISigoRDCW0DqPMiINpxYxzlK0a1A=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://metasearch-cdn.azureedge.net/remote/i.travelapi.com/lodging/94000000/93120000/93115200/93115104/948def79_z.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/uh1WvVN75Suc7nOYpaN3zxL58QKaDIjMDL3-BuEbIGwh6UB_tg07ekFmsBsQjA6f8HsTEtiAFxb-f6zNMWpUTF60ELuaos1XAuXr-RTSjnbXaewPWTGpXcUEoyuZVwT_irK5ovRKLkn4B2ZsF9r7g1vW_Fwxi0U=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/94000000/93120000/93115200/93115104/50574317_z.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/O16ynOTVNLVqpyVrdVM9ZGuUoluoVXydAXQ0kT3idvyJOh48nj34mbfsAc-vZX3AhSiGu89qvbaZgJ4DfEvnTQce55-57uOHKsbijQzTWnlfNtdm-pRlg75gYxu5yg7odHq1p5Y-PploClEwQgQU8sszVuyjpQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://metasearch-cdn.azureedge.net/remote/i.travelapi.com/lodging/94000000/93120000/93115200/93115104/1cb9a627_z.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/ppKhtdJI_bJV4g2sSv2kxInhA3D5vjoZwZ26gK1jWgl0-_JaPNI5JXJnsw94tE_q6AdbrS7jCg4lxTz69z853c3G-7u91SrF2CDHWZGAHLjJKGOSkPlIY7EwiSFd-bH7cNHyJEilQ22uZEbPeT_TZft3LgtLGO4=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://metasearch-cdn.azureedge.net/remote/i.travelapi.com/lodging/94000000/93120000/93115200/93115104/e6104667_z.jpg",
        },
      ],
      overall_rating: 5,
      reviews: 2,
      location_rating: 4.0,
      amenities: [
        "Air conditioning",
        "Airport shuttle",
        "Kid-friendly",
        "Outdoor pool",
        "Smoke-free",
        "Cable TV",
        "Washer",
        "Free parking",
        "Free Wi-Fi",
      ],
      excluded_amenities: [
        "No balcony",
        "No crib",
        "No elevator",
        "No fireplace",
        "No free breakfast",
        "No fitness center",
        "No heating",
        "No hot tub",
        "No indoor pool",
        "No ironing board",
        "No kitchen",
        "No microwave",
        "No outdoor grill",
        "No oven stove",
        "Not pet-friendly",
        "Not wheelchair accessible",
      ],
      essential_info: ["Entire villa", "Sleeps 2", "1 bedroom", "1 bathroom", "1 bed"],
      property_token: "ChkQ94ut6JXElNMwGg0vZy8xMWtwZGpuc2xuEAI",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChkQ94ut6JXElNMwGg0vZy8xMWtwZGpuc2xuEAI&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "1BR Private Pool - Breakfast #KRN",
      gps_coordinates: {
        latitude: -8.491021156311035,
        longitude: 115.26663970947266,
      },
      check_in_time: "2:00 PM",
      check_out_time: "12:00 PM",
      rate_per_night: {
        lowest: "$57",
        extracted_lowest: 57,
        before_taxes_fees: "$52",
        extracted_before_taxes_fees: 52,
      },
      total_rate: {
        lowest: "$57",
        extracted_lowest: 57,
        before_taxes_fees: "$52",
        extracted_before_taxes_fees: 52,
      },
      prices: [
        {
          source: "Agoda",
          logo: "https://www.gstatic.com/travel-hotels/branding/e89db943-92ad-48bd-9bd7-da844fa32f2d.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$210",
            extracted_lowest: 210,
            before_taxes_fees: "$174",
            extracted_before_taxes_fees: 174,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
          transportations: [
            {
              type: "Taxi",
              duration: "1 hr 20 min",
            },
            {
              type: "Public transport",
              duration: "2 hr 45 min",
            },
          ],
        },
        {
          name: "Lumbung Restaurant",
          transportations: [
            {
              type: "Taxi",
              duration: "10 min",
            },
          ],
        },
      ],
      extracted_hotel_class: 4,
      images: [
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/85hMU19mo5o5jsrekEyt6CGKwEsH5ZacD1YygpgjUW5joGvxOZ5_fZHM7r2Ia_HKsT9wiTooHTkVNip8aYsIYbtAiQ8GC6JkGZFBe24OmuuA6YjjkUzu_Qhct5HTcV8m3jctRDABx-uF36lAWM_2HuOkaNp1aQ=s287-w287-h192-n-k-no-v1",
          original_image: "https://media-cdn.tripadvisor.com/media/vr-splice-j/0a/ae/f0/c7.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/N7Z0dxSY52gyYoGyehfpDgF-2_OmNbY7aL6ufVMi9aIQXGTV4kRnQEK3zZx6N66XKuyeaHDk9nmBkhRGU762ECpic4OCjt-aC98kRbhzm0djGB3cf0IYtokkQT0Kna-ybIoP6vJhj550fCo2Gl1rNztbDByixhk=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://metasearch-cdn.azureedge.net/remote/i.travelapi.com/lodging/26000000/25140000/25134800/25134758/879df918_z.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/r-mttjbVebl43GU-enoVdQGlh_kq0aDeR2OOissYtz3bE4PfAMlWMB9vz4nid6tglbp-vNUXYVaV6zXeXy4ncIWQV_cuoR3Id2t4nKrVNT2ed52CZd9bxstTEFUQyhnwaZqCtivZiuNcEm_G3wAkANeF1VDirQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/agoda-homes/14084942/13e78c9b55fee4f96272b50436f4baa8.jpg?ca=11&ce=1",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/o8GqexpH-guPwun7SKHP9DNQidLTm0F5XK4MZcfMJyEGHa0ZMyosk-BhUAQHnZmtUGDzbCmglmUTJM9VOA1AHnX8ZKukW0WL5kpWHMRyF0YRamqZkGWitMFazaLNJoZR1y_Rdsk89g3Ex5rnDoc2jMoyxtqGkA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://metasearch-cdn.azureedge.net/remote/i.travelapi.com/lodging/26000000/25140000/25134800/25134758/cdb19738_z.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/0rfarjN3KVK2ZmJ_mdUiYRajlsn5ozgHJzQFQVw5qtXF2FkWITKTlN7NoxG9RwcvtaUBP1IWgMqwneuj3vYJ0ibsZ0prIrg1ePJHsxYnRRgT_n1Phv-kO3aRZ-IBD004Wmw4vOLTsw1LF1G2tmBNTixObh8hdw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://metasearch-cdn.azureedge.net/remote/i.travelapi.com/lodging/26000000/25140000/25134800/25134758/ebacecf6_z.jpg",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/DQOmziCB8SuiDGOXXc_SHt-bjJ4kvkOu2qzS4eyoICVe32QGYc85W8e5OhYgx5VUwjS0yMQ0YUinLNfZZCk4ru09Xle6COVyp2I4TaL8bF-YLjuRI27QQCBQLnHjgJ8TuB3jdlUk-jvw3o82XsFXvX6S_LGbx78=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://metasearch-cdn.azureedge.net/remote/i.travelapi.com/lodging/26000000/25140000/25134800/25134758/5df872b4_z.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/9CkZb_qfFk20FHevuIQTXWRJXgyCZp84ODuDYSGaFhbQXiqEvTp9F69W2tUKVC4LtOtt27agBzE7TlMVrhAlUmqjp52HblQAyfPgtT_augDLO67vr5pRT3tDMWROaQuToacBpRcrLM97UUv5q7I0m3rfMh3XmBg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/14084942/0/e9b20b96035dd473c8148313e9f05725.jpg?ca=26&ce=0",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/b8t3kT8gdPlT9gOlINxrQiZEWHwhmVY1hSoH-DNEpxlQM1mCBQ81KoBrh4iBWMkceIDSE4SbI2MTkVRWcVajRcGsrxe9lDiNdOTQhNgrfLSSI1SyCP1e0F_ZbwoEEefbeNkTydLabi8kPElcTP8YjKapiwbV11s=s287-w287-h192-n-k-no-v1",
          original_image: "https://media-cdn.tripadvisor.com/media/vr-splice-j/0a/ae/f0/d3.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/19FfHpNBwarrEvIG-caV3KnKmSCvuMSgN9SaYY6ARDSEIN2xWr3AgBREavMO8HiR2SqBxAyE3gNNpdKg_Yla63vzd7YcoRA293ZeCb1KbPKjpsvBAfvpigg-LCyBdgAB7wsHtiHvhu1JlJROvzpLssWqBD5VSQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/14084942/0/241d76dace30abb7b817b94ad39ce3fa.jpg?ca=26&ce=0",
        },
      ],
      overall_rating: 4.5,
      reviews: 4,
      location_rating: 3.3,
      amenities: ["Air conditioning", "Airport shuttle", "Kid-friendly", "Smoke-free", "Free parking", "Free Wi-Fi"],
      excluded_amenities: [
        "No balcony",
        "No crib",
        "No elevator",
        "No fireplace",
        "No free breakfast",
        "No fitness center",
        "No heating",
        "No hot tub",
        "No indoor pool",
        "No ironing board",
        "No kitchen",
        "No microwave",
        "No outdoor grill",
        "No outdoor pool",
        "No oven stove",
        "Not pet-friendly",
        "No cable TV",
        "No washer",
        "Not wheelchair accessible",
      ],
      essential_info: ["Entire villa", "Sleeps 2", "1 bedroom", "1 bathroom", "1 bed", "50 sq ft"],
      property_token: "ChoQzePc6emdk9WEARoNL2cvMTF0eHFteWZuahAC",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChoQzePc6emdk9WEARoNL2cvMTF0eHFteWZuahAC&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Dewi Sri Private Villa",
      gps_coordinates: {
        latitude: -8.488069534301758,
        longitude: 115.28356170654297,
      },
      check_in_time: "2:00 PM",
      check_out_time: "12:00 PM",
      rate_per_night: {
        lowest: "$79",
        extracted_lowest: 79,
        before_taxes_fees: "$66",
        extracted_before_taxes_fees: 66,
      },
      total_rate: {
        lowest: "$79",
        extracted_lowest: 79,
        before_taxes_fees: "$66",
        extracted_before_taxes_fees: 66,
      },
      prices: [
        {
          source: "Vio.com",
          logo: "https://www.gstatic.com/travel-hotels/branding/7287187d-2586-494f-92ff-726979e94c2a.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$79",
            extracted_lowest: 79,
            before_taxes_fees: "$66",
            extracted_before_taxes_fees: 66,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
          transportations: [
            {
              type: "Taxi",
              duration: "1 hr 17 min",
            },
          ],
        },
        {
          name: "Warung Tepi Sari",
          transportations: [
            {
              type: "Walking",
              duration: "4 min",
            },
          ],
        },
      ],
      extracted_hotel_class: 5,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/s-9EdEgsBPX-_bhLSuVYsZkDPsIqYFKYjiZWFxfYPpgZ8tNHnznCNnz6YoyQmUFt1g6GTNfv6jPzM2trCvfcoTWx-COa6OKzLALry9zrjz3NQ-j7QB5GFM6RLJCqQtufPhP-NMVmqUK-aRFVkktgOA0hUnZv4BM=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1000/66648699.jpg?k=b0a94359fb2ae03d09c4b2ab1d9dc560c59133961a9f42cd5cd79d7c4eebc5f0&o=",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/2P9H-QgZxBH0mlxtLNp0MY7DkXnyfgMLXHVltS83Mx34UPsTKa8yAnWgSj2c-0Q6CYEC4fiz_gojwwOMWW4eNgBIe4z-30UAzUF1aKWDEqUGR_M1SDc-vhgxYzNhwBpq6gk1R9NRRCOfwE-rcruJ-OLNWzupGXA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zi8GmlQcO1FMbAVKJfsIXyBCYu2aPGeGF_An9MaXFnLewTTleyrH4G0rrAzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4yVvzZQ3nG9m-EOZqnU2WQ7KfhO30Ezy-jnq5thbUuR3cO59smdYlhEtvx5kKqYRgZjAD1ZETSYWvU9U5E9Rgh64AZ_KQd1YCIp4WeJq_mZ-oRfhDjMW6Ti",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/M_cAZYfPfmGc4dcjPvH8nypwVrD0lsIGOHqlTtOnatoPi1bgepNuZ8Lb25toq9SLzl_rPVN7PFoKddZiWJYkKxSw46yAOOqgrfYvDp0z1CWJx7L1JXruMMNiYmEFq4YfHGts_rTKq7mhrl375meILFKBNVOreSw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZiMOc4x45sE4rNjK1XZcatwiapDzvRK27vBXnGdb0vfHiESt70ai5DFLOPTF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4yVvzZQ3nG9m-EOZqnU2WQ7KfhO30Ezy-jnq5thbUuR3cO59smdYlhEtvx5kKqYRgc8Fy1WAjS1a-E-DpE9Rgh64AZ_KQd1YCIXvorPhHYYev6SG87Ngcmr",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/7Of1iQ4064qXH5fWHcJI3CXw-UFuSFyOD6duwZuIQ2B6M4zxBXLvkENcEHVFZabPnc6-3bKZb9G5b1NZkg4xxvm5hSQ7M-4Zw8eV-izQqTc2mrl0hu8BFjcqaYM_TnPnCyFdy_wmbnkd7PdUFYrHqy05xhwNSD8=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZuoKVmykHvzsNORjKbb9R8jbju1LwHpv4uCOFFL7Sgu6WPFFP0I3DU3zQHzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4yVvzZQ3nG9m-EOZqnU2WQ7KfhO30Ezy-jnq5thbUuR3cO59smdYlhEtvx5kKqYRgc5FT50AzWmb-A-eZE9Rgh64AZ_KQd1YCKrDxJPCc2l7RzQ-HTPqzAu",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/N7yY6kdGPaP1mbeImUtuz2dzFNpynwpaOTsXWrPQtxgZlAXCas1V4hmLGSFolFJ6Am2PV632zuHGEvgyvJFVbVQ_nQgpiC74FZSgGdtKSj7N0xfHtlFPWXNvS9-lIFFaxjhszxpGRom_bmH_U1JWMu0RGFtKZw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/66648706.jpg?k=42ffa30bfb8ec230610188ddd2a6ba88eb512028e726af5d4852ff09b554f8f5&o=",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/lEW8fdaq95JOC_M_jvgAF6fG-BgYWYnnLcR7W-X8Ehk99K2wXP4c0d9pa5HXz0U4tE6jcBk_mz5i_r535G2oj5aCdfFJ3Pr5sPayt-CcoGhD3yX9lZjFHv-Mbz5-c7hiwmi4_q2pMjhCjtmy1iSKWQjqDFHkr98=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Z2sWQsSoTyVMGPyyoRZx50yzPin6AMpqOui-eJ9Dmlaq3SlJyxYf3MGnJGzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4yVvzZQ3nG9m-EOZqnU2WQ7KfhO30Ezy-jnq5thbUuR3cO59smdYlhEtvx5kKqYRgdxFy1rETWme-Y_aZE9Rgh64AZ_KQd1YCL4iCw2d06h6bmVFEjb6q7-",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/mhuykzSodPzhF9Npl49UhnJpldpg5zueE7Zl8lmQvuCL-CNcGO1QOQaP4pMKEw3UDRu5tUBBpFnTh2m1MU_0JmKnlZBT9U1CJMObuOTlpp7ANqQ4d8-S08b_VdiBWYM_6jJ1nPmFqktliXx18Jx2zouVWgrXaXU=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/66648723.jpg?k=bad5a10522daa6712d05d6475d840778751a8f8fa288de54f86f9d89a9e80bf4&o=",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/YGj1dGf78zYx7AIN_oqZcUrMoYI5y6jVJJK9b_58vviOO8hh_fs2v2Vh3yCHx23cMgFlnGlGXdFORr6zLGked2SrAlztm04wzwOgZkKY2f61VCNSIT7AMm9inZMp6EGSwwN5MgdsbkbE8AHGtUnLS7W1V36k0g=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/66648726.jpg?k=ae5f24987aa21fa14713e7e2471fcc5de53741220b7fc289d80015baa445b62b&o=",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/RJzYQG1GgeVJI6v6v2rltU6gecf89GmRf5rrpDUl61-faABWyNI9XVNcb2crj90r9IB03Ww8NKzwWwpbNKVlMzlR__r8Zl8L6J5hc8QDHPieaueT6-zsbuBAqACsUaywEaCmU1WGmePQFQ4XYdFkXgstjzWCXg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/66648701.jpg?k=bc11ad47f82d8123d0a074602bcd44c7e786b78327823e9b76acc5bb73242b4f&o=",
        },
      ],
      overall_rating: 3.965545,
      reviews: 312,
      location_rating: 3.0,
      amenities: [
        "Air conditioning",
        "Airport shuttle",
        "Balcony",
        "Crib",
        "Fitness center",
        "Indoor pool",
        "Ironing board",
        "Kitchen",
        "Outdoor pool",
        "Oven stove",
        "Smoke-free",
        "Cable TV",
        "Free parking",
        "Free Wi-Fi",
      ],
      excluded_amenities: [
        "No beach access",
        "Not kid-friendly",
        "No elevator",
        "No fireplace",
        "No heating",
        "No hot tub",
        "No microwave",
        "No outdoor grill",
        "No patio",
        "Not pet-friendly",
        "No washer",
        "Not wheelchair accessible",
      ],
      essential_info: ["Entire villa", "Sleeps 6", "3 bedrooms", "3 bathrooms", "3 beds"],
      property_token: "ChoQl-u48PaUsrLcARoNL2cvMTF2bHN0dDY2NhAC",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChoQl-u48PaUsrLcARoNL2cvMTF2bHN0dDY2NhAC&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Bali Beach Glamping",
      gps_coordinates: {
        latitude: -8.598340034484863,
        longitude: 115.07496643066406,
      },
      check_in_time: "2:00 PM",
      check_out_time: "12:00 PM",
      rate_per_night: {
        lowest: "$69",
        extracted_lowest: 69,
        before_taxes_fees: "$63",
        extracted_before_taxes_fees: 63,
      },
      total_rate: {
        lowest: "$69",
        extracted_lowest: 69,
        before_taxes_fees: "$63",
        extracted_before_taxes_fees: 63,
      },
      prices: [
        {
          source: "Vio.com",
          logo: "https://www.gstatic.com/travel-hotels/branding/7287187d-2586-494f-92ff-726979e94c2a.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$54",
            extracted_lowest: 54,
            before_taxes_fees: "$45",
            extracted_before_taxes_fees: 45,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
          transportations: [
            {
              type: "Taxi",
              duration: "1 hr 7 min",
            },
          ],
        },
        {
          name: "De jukung Resto & Bar Tanah Lot",
        },
      ],
      extracted_hotel_class: 4,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/__AQ_hXwU1_4GxuSCKkeiBVwoSsnrhF1rmg0LM43DZi_pAGI_HSub2qbdzvi6yQQvgOJtckhU1KaH250Ek-c3bylblWddxkJiWqqf7ll9T3NpKXcbk2cUa25m-bTttKOrAgNPxZc4Nx-nE_KF5wUczN7LnTgp-g=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/306915605.jpg?k=12a36ffbf9c3fcb068d3e65850b9952266510e55c769da7b53310350602231a4&o=",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/_ww62iyp1X68BfcSOqOctpRCeGKCEDNHqXFvWKUOsiZVfbNJ__51ItwxE_pFiJzIYVFynfMW9Po8KP-_aR52F6oELCeXtSp8NHQjajGZUA8nN6m82NsTBSJUKRmHF8fhqRuKx4k713lMG22FB2KA3LxB9e4wuA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZnsTyo2JwzE8CFxqUapIby2zTjELgEIqCjQr5IqvmnLeiFhN99Yi5FUPRAzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zcvBhQ3nG9m-EOZqmc2GQZKfhO30Ezy-ivqptDbUiB98O59snVY1hmtv9puqmbRgZhFy1wASOIbL4qU5E9Rgh64AZ_KQd1YCJVb6lBl9pdtmH0UuK7cd1P",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/dWkgJUItfRM15utyAw3DsCnjyongz0081niQ8JZbyLOAp7DZwQxmNenOE4lQk4c7RosiJ3yQMsK-05aKelivnPqedc__d8K8n04JzDSdj0lJwuuNJvED5hgjlfntjkLzrWUmx4CpRvtAxqzfpT-P53TT_g5vQw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/306915453.jpg?k=6fd53546a4599e70ff30145bae7b04102d27e720696b93f9c8bba5aebd9a4b9a&o=",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/yvjeE5SqySybqapbFWSlhilAMyuvLflE6Dkp17BvLfSMZ4LMsSyi2DhVHYMBn4pGCTjQil1yL2linwRWz2EcbniB0klK0bStUlaia5q1OIbfMkN5p808Bkjis7O9RZOM-kl6YhoKdzTSo_e8ThYM5vKmxcr78D0=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zg5OUjix3znd_Di-EQ50SwifomSjyR42lnQ7CcrTLlqWFAg1O2o7mK2L3PTF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zcvBhQ3nG9m-EOZqmc2GQZKfhO30Ezy-ivqptDbUiB98O59snVY1hmtv9puqmbRgZhA0tnWjSlbL8-U5E9Rgh64AZ_KQd1YCIHqsHvNaIFqklr7U9KH6Il",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/Qi3o6wJrab10O4Ef5CQ0jaTNU96LwY6z4hZ0bPG9NxfG-oDHMW55lrO0ZIUux52IO201xbk8pggRfpFFb27EGKpVb8E_EiQDyfD-oAEW8DtEOweCA0prPbY61KPB5HiXrYcaATbL_hiYji1N7u1vSQsBhDaMAQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zg7S5hQcE8XMGCDaFG7BRtSXGpXnwPrqG-UnrLJaoppK4FjB81ZnVAHK0ITF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zcvBhQ3nG9m-EOZqmc2GQZKfhO30Ezy-ivqptDbUiB98O59snVY1hmtv9puqmbRgc7Fy53XjSIUrk-eZE9Rgh64AZ_KQd1YCJmm0lj9LPgn9aljo1ifoa1",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/Sex1zkdNfNwO8QnIAP3l_qmMVzXMOajh305H9yqOlVLdHtwvsvYauSfkcOuJzQ0tENFWmbQXJLTBzrTo4vOjd106_y936tWgyK2ONL38jeonqX5cAFjuhbohqJNIITS-8xf03eZShIGAXJuGUB-VMZkj1g39p70=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zn5yOuiQ0s1QbDxGkF4dixivdlSjJP7GY-RrtMJCmhLaWSDxA57_KVg7cGzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zcvBhQ3nG9m-EOZqmc2GQZKfhO30Ezy-ivqptDbUiB98O59snVY1hmtv9puqmbRgc9FD1eADSIf-Y9U5E9Rgh64AZ_KQd1YCIsTHiwHwgyj8TwTht6Kbz9",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/YUyj5jzXYX98gjpqEuxcldS9ZYEa7noiVwsVAj6uRVh19_WMrb5BsH04Krk7q-EAhV-ZdmUkagYFtvJjULkbgsWH0HeMhO4A4keTSfC0-R2360Lo74zZY3542kVs9uI6maJ2tG4Fg_meYRSxgQRCDxpnA-SGHg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zo4Wr73wJ8H4cLhy_Sphu8WvCi0nxFJGdixr4ArbArKyzHRZ3-bXoVFLnITF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zcvBhQ3nG9m-EOZqmc2GQZKfhO30Ezy-ivqptDbUiB98O59snVY1hmtv9puqmbRgc6AxRoBzeIY-Y9U5E9Rgh64AZ_KQd1YCLWMWhmnqLT4hz9zFONR2vH",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/ZY5hJauMkJOGi5A0_cA5sQzbc3hMP_kL63f0CQjso20vcO0ir3oO6178GgUalTfbOmDxStQScedN6Ww94Juoy1VakprOcHIimx0fJWbGHaw8176mipTF0KrPGAvxpTkiIZvRSPNI0ZODm2VOxWtiAofkhmJVSQ=s287-w287-h192-n-k-no-v1",
          original_image: "https://media.staticontent.com/media/pictures/5c4fe305-d09e-4608-8456-f8d0e8a6c934",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/zuUSldptxb9OjpHvuZDf1i5K5t1WB-NIkTD1-861FeKQtVRc36Td2trPyJgXv034I7lZTUHJzBwa2g-9ca6MSuuX5clE39tFePA7V3Re9_HTBv6hcUEb4n84n8bPyF-PHtBdcoz4BS0xWv5pQXoZgxdkVIwv1I0=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zgb67sxUJwicQaE2OG8dm9RDngmnaMY6Aii6cFIzBtYmDMQ4R94q6C2jjITF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zcvBhQ3nG9m-EOZqmc2GQZKfhO30Ezy-ivqptDbUiB98O59snVY1hmtv9puqmbRgZhFwN0ACClc-c9DpE9Rgh64AZ_KQd1YCJ_TaKcadwgpgLd04J_3z-r",
        },
      ],
      overall_rating: 4.55,
      reviews: 547,
      location_rating: 2.3,
      amenities: [
        "Air conditioning",
        "Airport shuttle",
        "Kid-friendly",
        "Free breakfast",
        "Outdoor pool",
        "Patio",
        "Smoke-free",
        "Washer",
        "Free parking",
        "Free Wi-Fi",
      ],
      excluded_amenities: [
        "No balcony",
        "No beach access",
        "No crib",
        "No elevator",
        "No fireplace",
        "No fitness center",
        "No heating",
        "No hot tub",
        "No indoor pool",
        "No ironing board",
        "No kitchen",
        "No microwave",
        "No outdoor grill",
        "No oven stove",
        "Not pet-friendly",
        "No cable TV",
        "Not wheelchair accessible",
      ],
      essential_info: ["Sleeps 2", "1 bedroom", "1 bathroom", "1 bed"],
      property_token: "ChkQ9bq5k8myi5VBGg0vZy8xMXY2N3Jncnd0EAI",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChkQ9bq5k8myi5VBGg0vZy8xMXY2N3Jncnd0EAI&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Wanagiri Campsite",
      gps_coordinates: {
        latitude: -8.236220359802246,
        longitude: 115.14016723632812,
      },
      check_in_time: "12:00 PM",
      check_out_time: "12:00 PM",
      rate_per_night: {
        lowest: "$16",
        extracted_lowest: 16,
        before_taxes_fees: "$15",
        extracted_before_taxes_fees: 15,
      },
      total_rate: {
        lowest: "$16",
        extracted_lowest: 16,
        before_taxes_fees: "$15",
        extracted_before_taxes_fees: 15,
      },
      prices: [
        {
          source: "Bluepillow.com",
          logo: "https://www.gstatic.com/travel-hotels/branding/190ff319-d0fd-4c45-bfc8-bad6f5f395f2.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$16",
            extracted_lowest: 16,
            before_taxes_fees: "$15",
            extracted_before_taxes_fees: 15,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
          transportations: [
            {
              type: "Taxi",
              duration: "1 hr 57 min",
            },
          ],
        },
        {
          name: "Wanagiri Food & Drink",
          transportations: [
            {
              type: "Walking",
              duration: "1 min",
            },
          ],
        },
      ],
      extracted_hotel_class: 5,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/R42T2IYCP6cZqcsvNXCUqiwWsUGPcuBSyIb3_KBn5hwwKYmvRXEI2LGl8F314Q7w080mT_lMe-7THDpiQZbrigmWDaklOgRxQ7dSBd6LXGFZiqNA1XREe7KvqXue2QiNMUSdtc2QzjHZvQSDqfafxxmM8fppO_A=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zkr-PlARy1WwiGiWTHo5NzCrbiH7vArK9jA3rHsvCo4qnPxdt1-riFX-0FzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csYWt6dZQ5HrU9YH_Mi1sOBJIp-_VR0o0tdfMtAxxDIiyYD4BSyNiZqAt1xXDKjOEhYqjEzXNlZvlZrwUd47jph6FQA2SSisC4h7-DTktP9tNbouiPaQZ4OCFwEhjRY-A8ePJ9Uldy4T87SVhJaCmoaWk-_3XmyoPAZE8kPHeod_SAAmf4E-CeBPDhsV0zjwUDu5-t5UVY5R_5RRfFEiFjkRkZ1hssD3pzs37heRgVyVLoxQd46he0oqtIOpFh8Ixm4sW1gXkuNHKA0LKR5GXaySmtziKQ0J7NHB_akrlUqWSZ-3Tgcmn5t8RuMpKRG_D_ID4oEkvkaw_XbdLV0xn0kTc_JeoPIFEMgUPSvCA2",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/kCqUq8Nh4jGt9gt9j-5eItg2uuwhVP6gijkRL6EtYX-CL7wrDnY2nS_lmX-LtWDtatye9Py-NUhIeAokRRkmKaqGCZ8xeSUPk1EirwyULP3hrCziyoMCMc7Oxa8vb0hvIpi4Eq6gw2G8rda-zBTFB0Yn8QVwuSY=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Z3biArhdy6U8ZODbQH6Jr8CfjtknXWrampBXqE9T2n6nnOQpw9-q6NU7pfjF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csYWt6dZQ5HrU9YH_Mi1sOBJIp-_VR0o0tdfMtAxxDIiyYD4BSyNiZqAt1xXDKjOEhYqjEzXNlZvlZr1oquunOv_xUH1aCisC4h7-DTktP9tNbouiPaQZ4OCFwEhjRY-A8ePJ9Uldy4T87SVhJaCmoaWk-_3XmyoPAZE8kPHeod_SAAmf4E-CeBPDhsV0zjwUDu5-t5UVY5R_5RRfFEiFjkRkZ1hssD3txo3LheDYZhFDCxBps-gf8tpZAf4ZfwZBxqvTtgVQhIGat-rKF9FPY3gS2lzS-243aDADPkodUqGeJ63H3W3X8t8RuMpKRG_D_ID4oEkvkaw_XbdLV0xkb3P3T_4V20ZsQm8_C7mQM",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/yydCjpzt5dokEYCy2VPioLF_2-8CV28qMIgykwAxnQZzwkBLd3HT9tEoBIgRJHP54W3ADD-GggAQsYtaZZ-ThmydufjaaF9eXnTTnTLPhSwIRmSPTrI_86DrZ_NDjR8yVcGIFZDA2LeUDCroDNWU-p8x-ocXtw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/404483410.jpg?k=badc9058559b4b10f31f8b339eb9cfd7a4b1dd4eed7c4b91cb4f7ff141a0f3db&o=",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/_ArZs04vP6ZMT6OXWWykf0Hb4o86xZp022uGe3PpGrbDSuu_HQkbxqyY0UmJS7hWhpsz0RIvARghbgv30eFtgpM8y3NdO3g-Acd8hFrVvorSzsAKfDTmvOPaodDkr26ThPGqMpwvgHchIm4pugqDPwuMe-D6yFc=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zs8qQpB0K71BmcxK9SI5LyBXus3fWErf_jB3ZD4HgubiYATdnr6-_KVPAOTF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csYWt6dZQ5HrU9YH_Mi1sOBJIp-_VR0o0tdfMtAxxDIiyYD4BSyNiZqAt1xXDKjOEhYqjEzXNlZvlZr3Iz357GtJg3aVKCisC4h7-DTktP9tNbouiPaQZ4OCFwEhjRY-A8ePJ9Uldy4T87SVhJaCmoaWk-_3XmyoPAZE8kPHeod_SAAmf4E-CeBPDhsV0zjwUDu5-t5UVY5R_5RRfFEiFjkRkZ1hssNT9ys2bsewgjzFHCxQZ4wxu3tZVyN4Vf9M9yvdqklVQYeXGA-rGS2leQ3ReckiKA2JzNDxTPhqlD9nOZyingcXW0t8RuMpKRG_D_ID4oEkvkaw_XbdLV0xk8MBmDgY7S9_VGoq1sS8Sj",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/2heIxbBIFj_mD1EizzbJVD5niXpi5C74BjEzmJXobhjRKQSfhos4-bnscZCWBACfQEEn-4CQwqnpT7nlj70P3XtE7fstdjrfiwQskkebXe4ALJtmo5yv3IOH_QZ37sCInn4Ch02r90qjtKmz4ttKD8M9rabAOw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zp76LjT4SvyVhPzeGS5R1uxnfknvzQZSsnSHfKomiuoW-Iid9-4fON3nLKTF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csYWt6dZQ5HrU9YH_Mi1sOBJIp-_VR0o0tdfMtAxxDIiyYD4BSyNiZqAt1xXDKjOEhYqjEzXNlZvlZr0Eo37jTqJhUHmCCisC4h7-DTktP9tNbouiPaQZ4OCFwEhjRY-A8ePJ9Uldy4T87SVhJaCmoaWk-_3XmyoPAZE8kPHeod_SAAmf4E-CeBPDhsV0zjwUDu5-t5UVY5R_5RRfFEiFjkRkZ1hssD3pzs37heRgVyVLSxBVs6gjto4ZIfZFP8IJll9G2lWoyeWa96raR9EOTySm22yCQ0NLZDASGkqpI7XCw43X0W36ht8RuMpKRG_D_ID4oEkvkaw_XbdLV0xnTDjIj2lmm-_w7UbNr7VwN",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/XmU7mZ1sTS9omXrvy6ewZ5AUlKWZu81gXM2xL4viDU0g_CKtqH8QELOPxTvy-aLcDfts8kXkyFUSYgka_at0LQMIZpSazkMZI6JVA7FnD_PUrwYjBVsTjB4q7756qumO44yuyWX1rRs_y6eAeBI1_KTnRHPDQ0s=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZkrCooBoM124bEjGGGrVJ7gbYlXyKIuG6pUnYf9faoZKxFxJR54_1L1zADzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csYWt6dZQ5HrU9YH_Mi1sOBJIp-_VR0o0tdfMtAxxDIiyYD4BSyNiZqAt1xXDKjOEhYqjEzXNlZvlZr3kz5ajSsItcHl2SisC4h7-DTktP9tNbouiPaQZ4OCFwEhjRY-A8ePJ9Uldy4T87SVhJaCmoaWk-_3XmyoPAZE8kPHeod_SAAmf4E-CeBPDhsV0zjwUDu5-t5UVY5R_5RRfFEiFjkRkZ1hssNT9yjVyqexgFhVH4xBRs6gO1o4V-NIZhxZdy4sbvgHo2eHG-2LKR5G7KyTmbzjSA4pzMHzKEkoBQ4Gen4CngYW38t8RuMpKRG_D_ID4oEkvkaw_XbdLV0xkc0PUYKEGT4-Ll-9J311E5",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/iKx1ASwj8J3EBLyvtNk-8GKso-nVDFqs3-_1YEfXey7fmPHYyplzuzegn0i3TuWuSDNyFbqBR-7mgJ3MpD4o1dIYvmVkQ6T5TGEXY5QNT06qTqFanfAnjt-kvLWwR3sEZSHbHdKeXsLvJgxuzGRKoqQU1XJ_Uw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/466561350.jpg?k=027b30413f968ebe133b1a3b5e5acb82974cf8590ec1207eb033b140de90a1cd&o=",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/rLgTdiUR9VVpcAjJ77b8TTQQK01j3pficeK-sTD8kNG976PrrZB0F43JW1vbquJ0VNHGX4ggIhEUzN2TcWte1u2uzmNNGeGMTYNbH7cXB2fcddCSov6Pkt_0d-4JxtuW316vpgyBHy34s5JIGZXRBgJJ4IDEag=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Z27OFvB02815qc0eFVrtq-yzD9nXwWuqM-wz3BIrVoLqgKTBN-Y_cNAvVITF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csYWt6dZQ5HrU9YH_Mi1sOBJIp-_VR0o0tdfMtAxxDIiyYD4BSyNiZqAt1xXDKjOEhYqjEzXNlZvlZrgcn5bjShIozC2aSisC4h7-DTktP9tNbouiPaQZ4OCFwEhjRY-A8ePJ9Uldy4T87SVhJaCmoaWk-_3XmyoPAZE8kPHeod_SAAmf4E-CeBPDhsV0zjwUDu5-t5UVY5R_5RRfFEiFjkRkZ1hssNT9ys2bsewgjzFL4xBR71BewtoZTIJBP3ZdyhPztgnopJHG-9emS2lPbySm-2yOQ4tLZDwCHkpdt8XGZ-Gf0TG3-t8RuMpKRG_D_ID4oEkvkaw_XbdLV0xl44Rur7TGUGJ1WJjFHJHVJ",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/FsLOUVkYGqZ_JSNtg2LrdP-DgmK3A07Ht2aZs_gna_wiIfUGhXxbbpBM7opjs15hS0m-tlIea-maA7zenkLhE7203uRP_c5fXJMsE19lsRFeNKFeN-CfRta1baKCskYunM7mVODDN35nLmZ-Q4F-aEcEL41ucQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Z0p61h3sb0SALDlLKdqlk-THmklCPGbyHrx_MBKvh-7SQGgVg1Yv_GX38DzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csYWt6dZQ5HrU9YH_Mi1sOBJIp-_VR0o0tdfMtAxxDIiyYD4BSyNiZqAt1xXDKjOEhYqjEzXNlZvlZr2cc3p6vqZhIOEq4isC4h7-DTktP9tNbouiPaQZ4OCFwEhjRY-A8ePJ9Uldy4T87SVhJaCmoaWk-_3XmyoPAZE8kPHeod_SAAmf4E-CeBPDhsV0zjwUDu5-t5UVY5R_5RRfFEiFjkRkZ1hssNT9yjVyqexgFhVHoxBR7xATptZZUN4VMwshyh87slVQ5JXGu4viF2lTJyj6q2iOA243OIQfdkZdmq3OJwij3THG6t8RuMpKRG_D_ID4oEkvkaw_XbdLV0xnZERghmSe6AxzvhB0Av64g",
        },
      ],
      overall_rating: 4.4,
      reviews: 68,
      location_rating: 3.5,
      amenities: ["Balcony", "Crib", "Fireplace", "Washer", "Free parking", "Free Wi-Fi"],
      excluded_amenities: [
        "No air conditioning",
        "No airport shuttle",
        "No beach access",
        "Not kid-friendly",
        "No elevator",
        "No fitness center",
        "No heating",
        "No hot tub",
        "No indoor pool",
        "No ironing board",
        "No kitchen",
        "No microwave",
        "No outdoor grill",
        "No outdoor pool",
        "No oven stove",
        "No patio",
        "Not pet-friendly",
        "Not smoke-free",
        "No cable TV",
        "Not wheelchair accessible",
      ],
      essential_info: ["Sleeps 2", "1 bedroom", "1 bathroom", "1 bed"],
      property_token: "ChkQsZTY17z-z58pGg0vZy8xMXR4cW1nc2tsEAI",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChkQsZTY17z-z58pGg0vZy8xMXR4cW1nc2tsEAI&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Delu Villas  Suite - One-Bedroom Villa with Private Pool",
      gps_coordinates: {
        latitude: -8.672149658203125,
        longitude: 115.16551208496094,
      },
      check_in_time: "2:00 PM",
      check_out_time: "12:00 PM",
      rate_per_night: {
        lowest: "$11",
        extracted_lowest: 11,
        before_taxes_fees: "$9",
        extracted_before_taxes_fees: 9,
      },
      total_rate: {
        lowest: "$11",
        extracted_lowest: 11,
        before_taxes_fees: "$9",
        extracted_before_taxes_fees: 9,
      },
      prices: [
        {
          source: "Hotels.com",
          logo: "https://www.gstatic.com/travel-hotels/branding/7725599522425217147.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$15",
            extracted_lowest: 15,
            before_taxes_fees: "$13",
            extracted_before_taxes_fees: 13,
          },
        },
      ],
      extracted_hotel_class: 3,
      images: [
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/-r973wHekhHLkqGy-G7JDd3bu1Tmo3V752-pjI3oVyMWp8ghFTVQvTVMxRVrapGVpdc-XB66SOgZp4uwWBmOpnI2U5vVFGzJXuwUtWBONzuZechtlX5-f_Vg6p6p8OY0XoDB2UE8Xl3o4uOdvyOE8ZFItA2p6Q=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/9000000/8270000/8262600/8262597/9c1fbff2_z.jpg",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/ksRUMPbGrY2lpqvxvBpWOXJT4HnGd851HEr4ITZwlrWCw94uaRJFSMcFTkoLO5vjEJlixxN6ek2xLqSUmotbNPsbM2hI1EweS-SPDNFZp6Do5BjMs7kdnd2-fe4OfljrcaiHbJ-vGDkBMEstJobPKhcOUnhqr-8=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/9000000/8270000/8262600/8262597/8755e850_z.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/Pv6spjW-Y-8TenPNZtTcVLXU5aRCVkr_m074flfb3-1sTxYHCPcbjacji8n204XiGK-NspwN754Lr7mibL5nlVSDHeTndR5ujPrx135H3pUR2vgcaAlTEniRyIMBhzxYuk8fWgqBj91M9g4KXdvxSlZM74E5EQ=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/9000000/8270000/8262600/8262597/2d6d911a_z.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/9a3Yjr3X9mccE8njVZPLEtI5wZEES1mtBlHmOQYy-gd4ENcsjVCQO3eSDRR4fxRuKkfM2GPKPKBi41_Cekmt_gn3RsglmYoaClFd-huA9Ienmpf1P2C_JzdNwIR38R5a7T3oNxHJA-6ibmohYM28nv3NMRJXxA0=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/9000000/8270000/8262600/8262597/f7d2eb89_z.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/yMlldXekvM8LqT7R2I_eP7PHK_wvKXQrsJx-BHuLsxURJmTRYlxJHMugbYWWL_dvi0nwSyvjoEAn8n0GSeyVdSs-Mhj_wPBV32lrMwjro-_zBFCQ-ri_VKvxOtsKaWGJ4rHM2PYczsYpFB5C8rkuWMoVmvswe3A=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/9000000/8270000/8262600/8262597/e7a4c87d_z.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/2dW8KEra8rOZ_Lx91sSab03Xdmged73wgtQGv4TCHQ_hOrjJoK11ElpxHh7em7GqvVgmum3fO8y_UWiWDtKpinVLPXZquHg4N8LwOikLbPiSh67fWvWCifZ45iq2U16yusw1-ULyJdnVaBBjniLv8fy7bd0MjFo=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/9000000/8270000/8262600/8262597/7ec1971f_z.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/G62ZMFrdPfzbffktVIeziu3YVV0tm_9orOXgI-lSq1Pu9YJuZrAY_wo-a7YyD1DCdqLnDM_aw0FNMpO-KpBI99j7UAOwGM3xaXVaEMfy9wYm3DYo7K1y1MjjZid83RGIC0N28HBBvm1BqEW3i69P2oO4-prnKUU=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/9000000/8270000/8262600/8262597/d4eceadc_z.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/mGcl8rniNeLt4fAq5V9qQDIxwjIRbuGqKz7zuFBWdYvnq-Z0t-97tAVMo1_G-qvXxZDnBj0g-lWGhowx-2DiiqxoloG1cgtmGw40O4xzMEUo3Hv5bZZgTpUcQ2r-U-bMjfznTtwL9p1IaS4yaGu5JkEh6srJZQ=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/9000000/8270000/8262600/8262597/da616a3a_z.jpg",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/hIaAyzHtta8PI6OPSCjFU2buRlUoN8TrdiolTzhk4QbUbNTS8vehB7lE9gKhHJhFJtn6CZmstD1e1YdtwH3Z5m7CVoMgwyHDNM20TqyaV5hNlpjpFjGR0tqwJWiy2kQ6JIupLrjgiLAiXBAM-sVHTZaVDh_A1fU=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/9000000/8270000/8262600/8262597/2bf1e077_z.jpg",
        },
      ],
      overall_rating: 3.5331397,
      reviews: 344,
      amenities: [
        "Air conditioning",
        "Airport shuttle",
        "Balcony",
        "Crib",
        "Fireplace",
        "Fitness center",
        "Ironing board",
        "Kitchen",
        "Microwave",
        "Outdoor pool",
        "Oven stove",
        "Smoke-free",
        "Cable TV",
        "Washer",
        "Wheelchair accessible",
        "Free parking",
        "Free Wi-Fi",
      ],
      excluded_amenities: [
        "No beach access",
        "Not kid-friendly",
        "No elevator",
        "No heating",
        "No hot tub",
        "No indoor pool",
        "No outdoor grill",
        "No patio",
        "Not pet-friendly",
      ],
      essential_info: ["Entire villa", "Sleeps 2", "1 bedroom", "1 bathroom", "1 bed"],
      property_token: "ChkQnd6wtsntgNdhGg0vZy8xMXkzaHQxczU5EAI",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChkQnd6wtsntgNdhGg0vZy8xMXkzaHQxczU5EAI&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Villa Tegal Tis Ubud - CHSE Certified - One-Bedroom Pool View",
      link: "https://www.bluepillow.com/search?p_id=589de4237c00cb10c8d93082&dest=bkng&cat=Villa&accomodationids=59438b017c00cb0e643595b9",
      gps_coordinates: {
        latitude: -8.447199821472168,
        longitude: 115.23726654052734,
      },
      check_in_time: "2:00 PM",
      check_out_time: "1:00 PM",
      rate_per_night: {
        lowest: "$39",
        extracted_lowest: 39,
        before_taxes_fees: "$32",
        extracted_before_taxes_fees: 32,
      },
      total_rate: {
        lowest: "$39",
        extracted_lowest: 39,
        before_taxes_fees: "$32",
        extracted_before_taxes_fees: 32,
      },
      prices: [
        {
          source: "Bluepillow.com",
          logo: "https://www.gstatic.com/travel-hotels/branding/190ff319-d0fd-4c45-bfc8-bad6f5f395f2.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$39",
            extracted_lowest: 39,
            before_taxes_fees: "$32",
            extracted_before_taxes_fees: 32,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
          transportations: [
            {
              type: "Taxi",
              duration: "1 hr 20 min",
            },
          ],
        },
        {
          name: "Dapur Nararya",
          transportations: [
            {
              type: "Walking",
              duration: "6 min",
            },
          ],
        },
      ],
      extracted_hotel_class: 5,
      images: [
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/gtRVgN2l9nU0dMflr4z5jiRxsfrObdhE15apa56nsS1oGikAtfFuvfdrDoI_1spx9nPlIUDn-0KgsqTekAoyt-Ltkc7QAX7MjCJiqNJ_EnxxZcZUvB1L-_03rK1LsPp5b0kxPR8Te1c47MfHDIopaFGe1x0un2U=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/73236446.jpg?k=f7e3c975d0c6ecea567c64fb0414351d210df4b6287bbbdd780293abcb71004b&o=",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/HtOeScHrGwrQ4a8ggFzHLIr5o7HSFHNd2yemZQEdO8U4_v80Qcj6-vj3q7bC36d06E9k_Ol2SaegEt3ICLDuaCA4_qWe1bFuP5VBiDy6nt9CrLVnFAdE0Jo8LjvwFlbEAkviSEUjnxBnFjI0FWi03TGbJdURkq8=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/120008278.jpg?k=517b9c2a4fdfce3cf091c8f3544a5d05a6b5ee674013dc23f597c25dc9f5a8c3&o=",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/o84Vf934yz7q2Yr5agvlxOc15y7PeJR1eLuShkdi1FXq-cIIScPiB_ivlIFSwooHSenK8DpMUH6svw-QcHV-0M4Yspr134PJ66mhL9WiM7nsREX73jCJBD6OkNpCYuscaPopHpDgprTpOk_mMf4jC5hO21dmtw0=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/73236438.jpg?k=1d86a929b918fbfa844baebf753c55f93f434bdd25b99c5e7da5c98899d8c04f&o=",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/emzTKy4UGFTfITsuIBzCdTY4npTDyW7_2ZVyjuiJueHSjM2pznZTEiBd3st9SFeZObHF9CRErJvGhzGvZskkflaMBsH70JHNJPkGHp_RH1vYoL_0StFg8r4CVAHUKNPn7XHHspCrAXbIyAAgaUNHGsJXhqF9_zs=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/335301084.jpg?k=56baa5e4bc6b0b313a04c2b29687e5845eb45190e7d1964ecb12df42cccf4f3c&o=",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/M4O_VC5QOCFY47i6kpeX1SUfyqn6zyQOL9FYbAFAfpk392peOHGY1TWQbBy_3bGXgdASk3xhGgPGKZQthieMP2jAchcBKY_XIT9tifIXY4UHboIgO29MLd36yunVsbrMJZS_bmgD5ZMzOF9c5e78A7pRsYKSUQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/73236441.jpg?k=a7d520ac5446115c67bb070b8d57778c68c05e03b21ef34c2ccd22b6cc99d330&o=",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/uo_C7uk9JIIPFQIhHT-jQcOOiH3L_H-xUKYZrGJyaP1IaYse1nESHV4a6SkxnYwIcwNA6cLwKhSU8yzRqmONoJBFysxk03NI6KQBNP3BHZB-IwEnif6L7CGlexcKPHDlZZtCdq-fdBeSIVmmK8at1GJ6UrFN37E=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/335301069.jpg?k=345d679d43dce27bd58b4c42703bed23c4f2b29679d4aa8f3334da8f1ea6f8b9&o=",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/My_6IGqeqfdev9FLBHPEU_rwdwObropj788qe35x6Ca6WuA9jM6qJwhoYvfE-MAi41Gp1xs_IJf1zJO9Ke7Ahomfs_SwhrK-nwQJYrLkzU9Y6gK6yW41pbQ8rDkfGy4oKQwwIfNfRY0ee1S9qPjLQHRFZUUMQyI=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/205739067.jpg?k=5de221757e3d4c9337a1e61eb870fcc2bb9d5c707a5af51fafcf3e99a298061d&o=",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/zL-mfIrpYoHuBPFyJ33P5skMSQy7_Xcsc9W1S-QMy-fe-ACDJ0PxvARMdiJ_9oZqC9gYiGeVJdr-wLuhsAHJKuEO3ZPssE7Za4Pd9cG463NLHwERSM13FQmRE9iK0WvufGC7cNWXlZqzdTb1oHmIB312930Kbsw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/205739017.jpg?k=d580674ceb65c6342fa4eeed318448edbb8e8e92e30fa83c150e10bdbe1e43d4&o=",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/Wz4tYH5pgVRCzvKJO8H7yo_k_dIH2Fp-EMpz9fOqpTbUBNnPJ4KLkSss8yMHSKolijuquNkNwDhprQybrqzVlrhiNsvOSgpk0sjG3Y8wT1CGcBJLeBx_wCiy6qx_yocBCvXo0lnqfVVUEOicduAOPI8w_mR3WA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/335301065.jpg?k=31c0eac296fbb80559a1e30990f7c0a47718778dfc6f87d162ebd13bc26f0fdb&o=",
        },
      ],
      overall_rating: 4.6,
      reviews: 89,
      location_rating: 2.6,
      amenities: [
        "Air conditioning",
        "Airport shuttle",
        "Balcony",
        "Crib",
        "Fitness center",
        "Indoor pool",
        "Ironing board",
        "Outdoor pool",
        "Patio",
        "Smoke-free",
        "Cable TV",
        "Washer",
        "Wheelchair accessible",
        "Free parking",
        "Free Wi-Fi",
      ],
      excluded_amenities: [
        "No beach access",
        "Not kid-friendly",
        "No elevator",
        "No fireplace",
        "No heating",
        "No hot tub",
        "No kitchen",
        "No microwave",
        "No outdoor grill",
        "No oven stove",
        "Not pet-friendly",
      ],
      essential_info: ["Entire villa", "Sleeps 2", "1 bedroom", "1 bathroom", "1 bed"],
      property_token: "ChoQsvaKleW85c-xARoNL2cvMTFzc2dicTBxdxAC",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChoQsvaKleW85c-xARoNL2cvMTFzc2dicTBxdxAC&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Catching the real old Balinese architecture and ambiance",
      gps_coordinates: {
        latitude: -8.539036750793457,
        longitude: 115.25226593017578,
      },
      check_in_time: "2:00 PM",
      check_out_time: "12:00 PM",
      rate_per_night: {
        lowest: "$50",
        extracted_lowest: 50,
        before_taxes_fees: "$41",
        extracted_before_taxes_fees: 41,
      },
      total_rate: {
        lowest: "$50",
        extracted_lowest: 50,
        before_taxes_fees: "$41",
        extracted_before_taxes_fees: 41,
      },
      prices: [
        {
          source: "Agoda",
          logo: "https://www.gstatic.com/travel-hotels/branding/e89db943-92ad-48bd-9bd7-da844fa32f2d.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$50",
            extracted_lowest: 50,
            before_taxes_fees: "$41",
            extracted_before_taxes_fees: 41,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
          transportations: [
            {
              type: "Taxi",
              duration: "58 min",
            },
          ],
        },
        {
          name: "Warung Makan Suteja",
          transportations: [
            {
              type: "Taxi",
              duration: "7 min",
            },
          ],
        },
      ],
      extracted_hotel_class: 5,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/l--01gvIK3mQzl4_KYSnh4xzo0GelLygx8mE9nHvTwaeCQWXJ7Lf1SYdpSMMUdusKZfR3G9-2djWDS5EA0Dfo-IxC_K1npFUnjUF-gSCvRmOkY3cTXXyeD0O_9qFpnQw-aaqMvc7JTbkfzmSQmvmnfReHUyaoA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/agoda-homes/13632745/f9e71998f0ecf969b1ad645acc3fbb1d.jpg?ca=10&ce=1",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/3kHHEosWgeHT52a_jMjH8KHs_tBSQA2ATJKwNqo9SWGpQmnPNCxFFL098ARocJeAVlnNaau0gdbJJwt-4Z4FHanlejQFYk8rEmX91XlSenDKY7ImQQP7qjm0B46pRpySBY4dzpfnYWHjIV6hUPm-ib7ZclsB8Ps=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://metasearch-cdn.azureedge.net/remote/i.travelapi.com/lodging/12000000/11470000/11465100/11465100/6b53551c_z.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/2MdChrVmncZZH5CP7358sH3L_5eZeT7U_A6ttm6hM18zpuHVrJZukA-QlhSq_HEdK_d8IkXpCj-iBsD9YGd7dwZbX4UTIQwPrzpd2GvCiiuBILYLQFgUHIxxPJWHDPEm_k9ikk8NTYEjUxck6mgUt0UD3_4uFF4=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZroaOvS0kzSUUaxiVScVB7h3G-EHVH7uMvBz6ItLZvZWaPAlX9YzIEmPTJTF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGo49Qn31qiMVOoIxofR_2o8VcZA3AAhCPReYBoJ8vY2Gq2593GaA4uwNcdDb2nQda_hJpkwwzLOqqItHLkiogs668ZLRY0hI9f9Ay-Gbe1w8FT1VXjexAbwpaO06UwhH4BE5PltJaDWrUUZGpVzU577d9fDXX0KD3uTNkfoTeLQ",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/7ZH_MGmvBPAzyEMS4UOGj85yWpk2bzK1DZQFi6SKyhCBSwj4-MA_5DvPdH4VVxJWAqFUCXsJtlRngBRfOjfjUWyJmn6upCgo8ZoFyQH3kNP0Ey1y0HEsAbP3SR16kHmfWgHPI_qo4SEequcx2k6j1wbvV8U2bQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zo7aRtAwt5kcNLA2ubLF14BXajVvALpyjjErJf9_p-LCyIhVLronKB3DkBzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGo49Qn31qiMVOoIxofR_2o8VcZA3AAhCPReYBoJ8vY2Gq2593GaA4uwNcdDb2nQda_hJpkwwzLOqqItHLkiogs668ZLRY0hI9f9Ay-Gbe1w8FT1VXjexAb4-e_F3UAhPoxE5PltJaDWrUUZGpVzU5607zPjDYuhwiRGzIlKEIBA",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/b5gSTvFdK6b6okD5p2aTK5xgnzT8T6dzo9lqILPWrjEAi0Ih22vPw5nUIk3MwwYcJuEZSzNyfkegjy6ysFQyga4HVbcIF1GWsOUvz_uyN17-e7HKdAtPdyxxHhmu_L7j9Wo0DsvTOXUBVJ947nPZngt4gDEnFQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/agoda-homes/13632745/b40b2a8065c4ea51aa06f66559e2dadf.jpg?ca=10&ce=1",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/0-n9WJ55-TRpfnNLidUOlD88HghKCJjnhBhvB0DGFJQToVx9bHwPKjrbFKmaNadtvqtMtZLKVKXgKSL4Fo07Jwd4GtGDkJ41TNZf_PZdywYfYzzOo6yfU3owwmJddgy6vvKVD92UF_4tC0HBknVRxIws3L2129I=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://metasearch-cdn.azureedge.net/remote/i.travelapi.com/lodging/12000000/11470000/11465100/11465100/7d8a45bf_z.jpg",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/uS0vk-suObZWb6Rq8sMXCPE1VEyiiN2HxWavhGnS7nwBK0AtWQVDxTcShbW-0VBlEs26RixSnj0VLrqKa1VB0BvdNqDpD3KvHR4-PSpQu0BhfEoM8ng6f8S2qjZoJwJHlhm8fwWsezqGlal6vj62HOLlJxAjPQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://metasearch-cdn.azureedge.net/remote/i.travelapi.com/lodging/12000000/11470000/11465100/11465100/c5f3d793_z.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/Wgq3reKhfk3mpPIi5E7bPW8liFwhkbmFFVr8ArRg5Jr_qluelLuqk4y76ykiebOONIFv22oUsVK5gXZq61Qq1uETrFA4x-7d-96IG0_tI38mtGqUxseXgnpZx_n-h0Sb3A9QwjdCB8MBTb7-03koy3iHWnFNua4=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://metasearch-cdn.azureedge.net/remote/i.travelapi.com/lodging/12000000/11470000/11465100/11465100/438db3d0_z.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/Bdkc3RjMfBN_C2iUZt6ls-P4If3kIMDRc_cqeNSDfBDv0SxVvLW5KMKyC3_jxm7ZqllDggCDs071fkeXlP10YoR6h3Eu8w6ijtdCtx4QAtR_0xI3BZJak_NIU7q_-auQ4VLE4nkZFpEkgF11kx76GLJAYFnAeA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://metasearch-cdn.azureedge.net/remote/i.travelapi.com/lodging/12000000/11470000/11465100/11465100/d7d03171_z.jpg",
        },
      ],
      overall_rating: 4.7,
      reviews: 101,
      location_rating: 3.0,
      amenities: ["Balcony", "Kid-friendly", "Crib", "Outdoor pool", "Patio", "Free parking", "Free Wi-Fi"],
      excluded_amenities: [
        "No air conditioning",
        "No airport shuttle",
        "No beach access",
        "No elevator",
        "No fireplace",
        "No free breakfast",
        "No fitness center",
        "No heating",
        "No hot tub",
        "No indoor pool",
        "No ironing board",
        "No kitchen",
        "No microwave",
        "No outdoor grill",
        "No oven stove",
        "Not pet-friendly",
        "Not smoke-free",
        "No cable TV",
        "No washer",
        "Not wheelchair accessible",
      ],
      essential_info: ["Entire bungalow", "Sleeps 2", "1 bedroom", "1 bathroom", "1 bed", "48 sq ft"],
      property_token: "ChoQ6s61tqDtrIqKARoNL2cvMTF2NXg4MjJmMxAC",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChoQ6s61tqDtrIqKARoNL2cvMTF2NXg4MjJmMxAC&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Moringa Ubud Villa",
      gps_coordinates: {
        latitude: -8.470451354980469,
        longitude: 115.24513244628906,
      },
      check_in_time: "2:00 PM",
      check_out_time: "12:00 PM",
      rate_per_night: {
        lowest: "$120",
        extracted_lowest: 120,
        before_taxes_fees: "$109",
        extracted_before_taxes_fees: 109,
      },
      total_rate: {
        lowest: "$120",
        extracted_lowest: 120,
        before_taxes_fees: "$109",
        extracted_before_taxes_fees: 109,
      },
      prices: [
        {
          source: "Agoda",
          logo: "https://www.gstatic.com/travel-hotels/branding/e89db943-92ad-48bd-9bd7-da844fa32f2d.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$120",
            extracted_lowest: 120,
            before_taxes_fees: "$109",
            extracted_before_taxes_fees: 109,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
          transportations: [
            {
              type: "Taxi",
              duration: "1 hr 17 min",
            },
          ],
        },
        {
          name: "Lembah Ayung Restaurant at Pramana Watu Kurung Resort",
          transportations: [
            {
              type: "Walking",
              duration: "1 min",
            },
          ],
        },
      ],
      extracted_hotel_class: 5,
      images: [
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/cgn-7_v0pCOkLxvwfKBTzWf9gLeAPjXLDpARwLfa8xR_V61yL-IcMa0QJ5Zd5PjaUn1xZQnVpH1O0bXY17_bcVxA1tavM2ZL46fC4VIKofI3h_XIDuVnB5N2kkjeU_rBKdsFPrQmQnoPKVO2KMBFA4Hj7Q2LIA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/11/16/88eaf9ad-b326-4fe2-8fb9-07e89e8a4dec-1668569173070-35f85dc5c4f9721005ea98b2433f1097.jpg",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/xzjtkQ-CPJ3lWvtFdEOnEcNkntFYRn9dsl1bcN6dk0LNlLWwp5pvMJ1XsU6lTWRbKlJj0LrRfOm4WiUfGgPTB3txiK3UIoV7xt2A9ys2vdSTtoKpEiDWX2X8itMPVHNwy07ZzCkCQ-A4EfG9JviLAY_PaWXzoA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZuMWbgwwr3XgKCwuNV5lN1A-dpEH6Ar66viuZM4zduI3gNlATrISiAFDzKTF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zdvBhQ3nG9m-EOZqnW2GQ3LvhO30Ezy-jlqpttaEiR-8O59smfY1hIs_9pmKubbAc6FANjWDeIf-E9DpE9Rgh64AZ_KQd1YCLDkEu4qUS64mgiHe1dRZck",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/hPf4a_i8cdQOye3JUcO_948DVEv0FshVlKI1sM2u_uJqDd5oef5t-2C4RWefdmHXsJsB8XTUyhL_h_fXa_SVQMutjphnzd0FQM9q-vQPMZj8Vp1KQRGu63pFUSO1keszJqmbGHgi4fGQKl5Zho3pPn9maHWYUF8=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/11/16/962eb6fc-58be-4c0b-a003-67c820f91984-1668569173489-cbd7a837b2f3b1dad09cb6b5bf148d33.jpg",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/0KgpA8d7_cBuFcsYG6RaXxFSkGSVLcFTsa-qTVFPsL_RyVgSiK-z_Tb825X_Mcg5AOK5QauUKxu_1YZgWJFUvKL8udCpkXmHtwqmA82mHCUYT5x1tCemqYU84QjbS31Y4dZU-XXHSgl6BkE6p6UYi79fZQ3Hsbs=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/497109587.jpg?k=80ca7dd5406eae1dead982e1a84fb0501d7cb41ecc81e0d887126bf383d96053&o=",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/m1Am41i0lVVV2sy_OEdpFbK-rwHmGFrPJaStUEs52hd3nO3ji1EG0wvVwQw4QApP7HP9Myhd634YCx73QttwKHqHYOPEzDD-8PaTU6odMhI5sbSQONWRqBCSPeybmlrgDBHomcXgmFEtGXAE6Q_T9AIjMoAbiQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/03/14/1f55b9ee-6326-496a-b244-1f1474f4a6a5-1678755963545-af42f2f169fca99a894264f3bf5c1abc.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/MsDcc3i88zCDzQoHQ4Ji-Z3Q8dqUGP9ba2kJvWcdrzJpsuhWdiK2l9C1cyongd3n95nBlyRXhpySVaZRCsxTEDtKlW0zefA5Uyh-XgE2egE29EVnE1WQ3rW2STtCYZsN74hfettqLaEkYZ1N4SmwJnNdHpxcRw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/10/07/1e340166-4126-47a6-8415-cbadcc67da3c-1696657527619-6bb84962a57dd7c710a8bc93c994741a.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/e-Vd_ZCv8-Km3DrLByM7cFVJvxDpaxRm77GnLYnHeTjTik4eAcc-9-gCwQxCOfkn4p005mUorAo3w-TKRmU9WO17wwC7aPlyjj7Mj6DBuly904fLsHHiJY2EoM919DJ65Uo__xr1uLP0R1ynSzJulXp3AkmAoQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/10/07/4c482238-d3f3-48e3-abe3-ffb2dca561a0-1696657460151-cd1ef24ec0f2cdcd4d79049a0c61b23a.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/T4WrFQRunZuCbOeqw79_Q8dLOgs3veRinXfxIimXizQgk5rfhgq3AeMAVDI8ps7jCi2HYUO7kphNEi0HpncOMtBDQtbt5MgBYtV4acaXsUfPXXJmp_1xXvl00sBuprirF93DSc5iUIUh881J1FUhzZyEKBjoYA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/03/14/cdb97ec7-f582-4c55-ad4e-7ad1c9c7d9f6-1678755930263-3240c8ae89946a92b02eb76729414ea5.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/sXpUZ25MPYoTV6rjP8LHP9nDExv8s-w7rnqPRY4_87lhqvsYAzsV0E__A4i-P80AgAzz0H4UhKyZ9bGihjhUywAeWQ4N2mz-CgkzkCDyUxHhvQFWajiJUqaa7oFrHhyEEX1XMDPQN6DrtTJTuXTn8_h7tZE5suk=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/497109343.jpg?k=facfd8e92da4eb970eee73570add8400964be526e6375da3be83b1c6e2ef947e&o=",
        },
      ],
      overall_rating: 4.75,
      reviews: 278,
      location_rating: 2.9,
      amenities: [
        "Air conditioning",
        "Airport shuttle",
        "Balcony",
        "Kid-friendly",
        "Crib",
        "Fitness center",
        "Ironing board",
        "Kitchen",
        "Microwave",
        "Outdoor grill",
        "Outdoor pool",
        "Patio",
        "Smoke-free",
        "Cable TV",
        "Washer",
        "Free parking",
        "Free Wi-Fi",
      ],
      excluded_amenities: [
        "No beach access",
        "No elevator",
        "No fireplace",
        "No heating",
        "No hot tub",
        "No indoor pool",
        "No oven stove",
        "Not pet-friendly",
        "Not wheelchair accessible",
      ],
      essential_info: ["Entire villa", "Sleeps 3", "1 bedroom", "1 bathroom", "1 bed", "323 sq ft"],
      property_token: "ChoQmd_y79bLvbnEARoNL2cvMTFrajVtYm5fMBAC",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChoQmd_y79bLvbnEARoNL2cvMTFrajVtYm5fMBAC&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Tirta Sari",
      gps_coordinates: {
        latitude: -8.423919677734375,
        longitude: 115.28163146972656,
      },
      check_in_time: "2:00 PM",
      check_out_time: "12:00 PM",
      rate_per_night: {
        lowest: "$70",
        extracted_lowest: 70,
        before_taxes_fees: "$70",
        extracted_before_taxes_fees: 70,
      },
      total_rate: {
        lowest: "$70",
        extracted_lowest: 70,
        before_taxes_fees: "$70",
        extracted_before_taxes_fees: 70,
      },
      prices: [
        {
          source: "Tiket.com",
          logo: "https://www.gstatic.com/travel-hotels/branding/be7f980c-6153-4e5f-a4f8-03adb19764e9.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$70",
            extracted_lowest: 70,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
          transportations: [
            {
              type: "Taxi",
              duration: "1 hr 34 min",
            },
          ],
        },
        {
          name: "Warung Manik Kembang",
          transportations: [
            {
              type: "Taxi",
              duration: "7 min",
            },
          ],
        },
      ],
      extracted_hotel_class: 5,
      images: [
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/kvSdEbxQs9EFGkRnpF2nNRfu8XstuxJVnX_31QjoZfmklwQCwiI5tqL0S1t47ViBO-ZXtXYrc-8ZofSJqTEKp1yjmkWLAi8kwdybreKQpLvjwJh9Xjw0CfSn6xldsX9wzs0n8OM6tmNsDfu6THH4ksQJjPBVPA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Z2a234n828HM6LkuuXLx06xfkhHX4Br-kkUzrCqTwn_GKEiR9rIzlJ2vQLTF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zYvAhQ3nG9m-EOZqmZ2nQ7LfhO30Ezy-iqqIthaUi_2cO59snQYUhEsv9Xqq6YVgc4FD5_ETeYUeEqaZE9Rgh64AZ_KQd1YCLRn47iBjE_yupSqU3B3JpM",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/-mAOFViZTnG2DYHNoTcvk4M1g8C6RxEmSrPFz79iySLsGhaV8ZakUv3T5KtV0f6FVqgH2JjnO2gC8CGVCNcxUWYeBR8e43tvoLlI1JJRUteIB1TB1AwMVnXAUALIAUFCzbTeZGaLIfSA5RZOtzHFO4XiUHy0FA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZnryS5SQK6GMcOjigY7VwuxX07HPTJbHy9hf7FZ_BkLqmDFdz_Ye-Ogz1PTF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zYvAhQ3nG9m-EOZqmZ2nQ7LfhO30Ezy-iqqIthaUi_2cO59snQYUhEsv9Xqq6YVgZhFD1eAzWmd-c9U5E9Rgh64AZ_KQd1YCKUvnJIJLag9wNuTXNzMtWl",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/MG98V0ChBLM1VyQi2vkEwb6xM2cU8F7cTeJ1YlJzewV73g0Q0Uq4b1jspL_xOFPMybTrTjqlodDG9wRVbi4IXsklua6obl4Uztvxa1l9k9RLdOTEBsM1ZNSE4-qsV9BJ-_HeaTsvThe9Ba2ALPCCUb7KGaXty1s=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZuYqngjw49CQWDRKOfY4X7TDNniXAO72U40r_Kqnj_pWnKwB2z7jiVw_xdjF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zYvAhQ3nG9m-EOZqmZ2nQ7LfhO30Ezy-iqqIthaUi_2cO59snQYUhEsv9Xqq6YVgdxFz1RWSCIbPQ9U5E9Rgh64AZ_KQd1YCJjHGuy9s_QvcH5H-Y32fW6",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/HHqJkso-rLyzWKMGHodHTStD3kF6xKbvB75mPwky3EIb4YDdmVPk9aY2_hUCcQzpQUR5fykFty2O8neizoFkofgh5ORGLMG8Zzy_lezuAGWy9GUUHfrYQPa90i2Mfs_V95osmGc3HPaInU13292IE6pxH_M5JQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zg4Kz4n4Z7HEdJziNQ4xTshfvgijUQZ2fmxb3IdfEopvlOBVt9YXjTmq-BzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zYvAhQ3nG9m-EOZqmZ2nQ7LfhO30Ezy-iqqIthaUi_2cO59snQYUhEsv9Xqq6YVgdxABNWADemUvspDpE9Rgh64AZ_KQd1YCItKj-bxiRnzP_PK_IFGFnC",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/z1BHNraeRPndjNMqg7bHx1y402f5ifu4D6R8VEo2w21tOP7xEgxwM3CPTr7EZT1opYoCATi8hUAnnD1NfS_mchNFdRRoy4xe3kNK85bqz7O4PVku8OoH77nfvdA5kmFu2QSSfKQbs9MxCX9gagYoTdi4hTXafg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zq5uNrisjtnU0EAeIes98ySbvmUHNQLCo9jf-JK7Hto3iKDB1z7XaDFbEdjF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zYvAhQ3nG9m-EOZqmZ2nQ7LfhO30Ezy-iqqIthaUi_2cO59snQYUhEsv9Xqq6YVgd_FS53HDSIUeU_eZE9Rgh64AZ_KQd1YCKeEIcsWRpEsjjIHpIdZwGg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/OZlpzbzVQpniUiJkDHb9psJjpseFj3poND1focrVG0SdA0GrxgBLPtitfeUmwoTEqwVM_OB9fa2AUgPTNsZ0_5JUV5K5OC5u2dmVkw3k1jBFKN4YpF_rxB_f_vY_Y9BZwctA-zOb8uNcFX-9x8vQadkDoEi8LEs=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zosrygwgj60UfFxqSRpJv62vNkGCPFuygjwPbc97Wt4_4OCoc-u_fMHzOCzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zYvAhQ3nG9m-EOZqmZ2nQ7LfhO30Ezy-iqqIthaUi_2cO59snQYUhEsv9Xqq6YVgc8FC5jEyOYUr8_eZE9Rgh64AZ_KQd1YCI1K6R1iBdT92A1THAU7SnC",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/kjM_fy2K1oViA4_vJNV8s_tiVEFgCGnAZF5Zf4OUcO8lrbUkWKXl38O4hyes-kPFppbmkybtW7wjhhZQp7GzxGtKZkVcn8wSrT0o8A788rrbPzWuKORvZ01O9OZA8tRC6QnMrg9U9GBTInW63R_C88ZN0YIAYg=s287-w287-h192-n-k-no-v1",
          original_image: "https://media.staticontent.com/media/pictures/242c8101-688c-4bee-922a-018229e354e4",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/aP7A34SYkTpKrmmkcxiPKCoImrEMpoDzcUkRmVusArbtuvfK98gt0A4GihRWrkDuL0hwjTA16nIQGQbDdQ67Kfq1VsoUX5RwNyIeYX1Y7na9xdc2blBZTnXs6NKNfBwMJRqXgvkJM_o31rTMon8NJUoXM12X7co=s287-w287-h192-n-k-no-v1",
          original_image: "https://media.staticontent.com/media/pictures/9576f316-8cf5-4143-b597-9f4807eea9cb",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/x1PV03otj6hl6w03KembKT3yEXWqlKhLb0HEwE-NM-7dmevYvDz1MUY5tmjXKwbymZm9WfcnTiepe_ikqKtjZzg3OSbDMgUSTrmtXMBHRq0YBeyYaaOirAu49d2bP7-GM1dWfXie1sD6yFpRDyKfIbMXDqOYOMI=s287-w287-h192-n-k-no-v1",
          original_image: "https://media.staticontent.com/media/pictures/91612afc-ee34-4539-9851-c957f99a8652",
        },
      ],
      overall_rating: 4.3,
      reviews: 18,
      location_rating: 3.7,
      amenities: [
        "Air conditioning",
        "Airport shuttle",
        "Balcony",
        "Outdoor pool",
        "Smoke-free",
        "Free parking",
        "Free Wi-Fi",
      ],
      excluded_amenities: [
        "No beach access",
        "No elevator",
        "No fireplace",
        "No fitness center",
        "No hot tub",
        "No indoor pool",
        "No kitchen",
        "No microwave",
        "Not pet-friendly",
        "No cable TV",
        "Not wheelchair accessible",
      ],
      essential_info: ["Entire villa", "Sleeps 6", "2 bedrooms", "2 bathrooms", "269 sq ft"],
      property_token: "ChoQza_bp8rkt768ARoNL2cvMTF2cnh0N3lkcRAC",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChoQza_bp8rkt768ARoNL2cvMTF2cnh0N3lkcRAC&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Villa Bakti Ubud",
      gps_coordinates: {
        latitude: -8.52289867401123,
        longitude: 115.27833557128906,
      },
      check_in_time: "2:00 PM",
      check_out_time: "12:00 PM",
      rate_per_night: {
        lowest: "$36",
        extracted_lowest: 36,
        before_taxes_fees: "$29",
        extracted_before_taxes_fees: 29,
      },
      total_rate: {
        lowest: "$36",
        extracted_lowest: 36,
        before_taxes_fees: "$29",
        extracted_before_taxes_fees: 29,
      },
      prices: [
        {
          source: "Hotels.com",
          logo: "https://www.gstatic.com/travel-hotels/branding/7725599522425217147.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$36",
            extracted_lowest: 36,
            before_taxes_fees: "$29",
            extracted_before_taxes_fees: 29,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
          transportations: [
            {
              type: "Taxi",
              duration: "1 hr 10 min",
            },
            {
              type: "Public transport",
              duration: "2 hr 20 min",
            },
          ],
        },
        {
          name: "D' Ubud Warung",
          transportations: [
            {
              type: "Walking",
              duration: "5 min",
            },
          ],
        },
      ],
      extracted_hotel_class: 5,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/BKNaOJchEajoTkAbNZfanPvLDUv9P7f_JOu-MFLB7slB0SBpJfM08bzxTQlgMGTIdaMHwVf_45YSM3zJ1J3r6aDFmZaS_V9h6WzLQ949orL2V3ejNON_E5CUAUoV9vbb0SBWh-Jw5imXzjbF-Mg8VtwrSR7bJi8=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/13000000/12810000/12809100/12809019/9b812cef_z.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/nhsSJMDmt0tiR3lYrxpH3YeRiwcOJsrHFvbE2pzjUHjp66WuW5sQE_RfztIb1ng0Vx8bVUlyxcDTo5PzWInMHlEt3l264kxxU2Ibw7EqKJadS-XjaPYCKDtud0hStvlH1Uo3VHRFqQ2wbZ43aQaPAuKJLMySCA=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/13000000/12810000/12809100/12809019/c162c38d_z.jpg",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/8yoCjtsVkbMp7PUDKUUBHvWkAjamygN77wb_eVEPJ5cnPPU2rQ-T00Z8GZeRMNIjDpySJA5ZOlrk8IeFrucvQxDimktD46V2BFz8qU_Y0LwUKsw7dYgJD_RgaW4WgYfP9Vwx0giTNOFA3WqQCAZKfmNaAarued0=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/13000000/12810000/12809100/12809019/6c222f8a_z.jpg",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/PwnunVypQM_A54bq8eXleg_vlPBFwKBlfTBD1iksjWUQq-C7f-SRaC0pA2rP4xsEx3PRrvSIlmuhPC9m-koUyyyD4bY49W62OfcoewSCXtFIzspFdiv-6mjl3GLWy92qrfqYhbTqIvOG0drmiZMIxS_jf86BBg=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/13000000/12810000/12809100/12809019/8d7f2d66_z.jpg",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/EzVndRRgQjKh0KuJET7ohY9T_gZTeFGR3d1qXFaBU1MuH97wb7UVg3dOCah8xfo5LDDPyLbkP1GYWYBeLy521xmeoIqrPDJWfOOzQRmOn4Ho_2Y_ac20rWJYzQPaxDVHQwG1UmRHp6u0IoqTjcJh3-r7QmBjkQ=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/13000000/12810000/12809100/12809019/f12edeec_z.jpg",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/_lL6c3gVdWvBhRyQppU0Ag78vKuEltkeD04EfKt2wwfd7kMCR5NC3kpaICNQ92jVIQyD3mFmYNK3dkS7yJWSXjKbYPHU6fJj4ejCC2fTkz2EK3g2ukjXCqbT2fsunjX-hew26U6eO03zwBk_iwsmy8vF3lg5hA=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/13000000/12810000/12809100/12809019/9d2a46e7_z.jpg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/ZxM4udFmFWg4f7x8ZNIjDZAxL_bTgj7c1C4EgLNoweItuiUUk9WDbcy70TuYQEehWGSapePiUqUEvGyTR1xq1LHwCs5oksQZsLfnEAgdmTacOm6l00Wr1Ame63KX2cy5xZNfJi7SILlZaddiW7eF9j-yeOQ-NiQ=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/13000000/12810000/12809100/12809019/8fa2746c_z.jpg",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/_3XIJWUAOyov2w0Lpyk8qldnvydG5XX9B4dzDm0OoovlV07YaajOzig9WRi1JKR7CL28FG5qdqnQ-r83fEUmLZ2n7J0Kpm2rJ3csDhwBQPcj769IhxCrsByL22TdT23m5kmKzFHay4x38Hu0wFHXefJkOe_gXA=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/13000000/12810000/12809100/12809019/279c862e_z.jpg",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/oNXCo_q_KzLsAysuX5CN45NSFwcpwEhcDq0aq86N2G_dMvdjJtamxJmdUht6MvyjTX5ZgQSCvjfXRp0m8ID8kQb5eAUTyi6xqLnmzWfQvLC92DuCeHDgF9UfLLG262Ti9NC2U4uVcJKYJYu-F8Bzi8VGSfS5ww=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/13000000/12810000/12809100/12809019/5e9ab173_z.jpg",
        },
      ],
      overall_rating: 4.8,
      reviews: 48,
      location_rating: 4.0,
      amenities: [
        "Air conditioning",
        "Airport shuttle",
        "Balcony",
        "Kid-friendly",
        "Crib",
        "Heating",
        "Hot tub",
        "Ironing board",
        "Kitchen",
        "Microwave",
        "Outdoor pool",
        "Oven stove",
        "Patio",
        "Smoke-free",
        "Cable TV",
        "Washer",
        "Wheelchair accessible",
        "Free parking",
        "Free Wi-Fi",
      ],
      excluded_amenities: [
        "No beach access",
        "No elevator",
        "No fireplace",
        "No fitness center",
        "No indoor pool",
        "No outdoor grill",
        "Not pet-friendly",
      ],
      essential_info: ["Entire villa", "Sleeps 2", "1 bedroom", "2 bathrooms", "1 bed"],
      property_token: "ChkQrra-y5PGrK5zGg0vZy8xMXZmNTVueDljEAI",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChkQrra-y5PGrK5zGg0vZy8xMXZmNTVueDljEAI&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Umah Dangin Guest House",
      link: "https://www.bluepillow.com/search?p_id=589de3fa7c00cb10c8d92dc8&dest=bkng&cat=House&accomodationids=59438c787c00cb0e6436223a",
      gps_coordinates: {
        latitude: -8.509380340576172,
        longitude: 115.27552795410156,
      },
      check_in_time: "2:00 PM",
      check_out_time: "12:00 PM",
      rate_per_night: {
        lowest: "$24",
        extracted_lowest: 24,
        before_taxes_fees: "$20",
        extracted_before_taxes_fees: 20,
      },
      total_rate: {
        lowest: "$24",
        extracted_lowest: 24,
        before_taxes_fees: "$20",
        extracted_before_taxes_fees: 20,
      },
      prices: [
        {
          source: "Bluepillow.com",
          logo: "https://www.gstatic.com/travel-hotels/branding/190ff319-d0fd-4c45-bfc8-bad6f5f395f2.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$24",
            extracted_lowest: 24,
            before_taxes_fees: "$20",
            extracted_before_taxes_fees: 20,
          },
        },
      ],
      extracted_hotel_class: 4,
      images: [
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/wD0IloEX54FyYZjYURjePcQ3twh9QAK6uLZryy0dO8Np_E0tNjkaLyNQu_Wpslc99KKL646dmnt61njr_AFTKk_ZiVgiZdff365T5nvDTAo1pI6YywUn6bLXq_GBCuzPIUgcAIRe7f96z_pIYt8L5iADaMdn0cA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/76712204.jpg?k=c20afa1c8cb2c56cc20605ec209338d4b3426a3787ee1510cf78dbbbdbf41c43&o=",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/kNvmy3U7r7eebaHsNymSsE_RZZrgNmvk0DmxFWcNnOInnhrVGwgV3zkXr4i1bKCzFfHfgjji22GgKjteNKUN6KwofWZNgG7OC7KdPgPWgOjPX0UlQHcSLN_mRANXjdQNRy2IJ-7Qv5FDZIwdX972FRABvdVjzw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/76712214.jpg?k=dfc97e8758a74fbb26bef843029ffc980f7efa8877bc87ff202cc7a31cb9e278&o=",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/YGQ4hG7kVOq8ZLwr9pnNoXONUb1MDlLMDe3cV1TsEgcqKk_EPtdHHl46egd9TGtsGLZy_yZFYbipzz8_LXZ9UAbDGZXzcbecsukQCP7FV9teFBMLJdMo9hI1bLxPTWJwssdC6-kX1uYi060lQfR455LncAjpfA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/76712233.jpg?k=a835ff5f713be3d44749717fa4fbcd9a6e56171aae6663933e10eace152280b0&o=",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/qMJ_9TBJF7Xke2iVQ2Ez8UNQgZSU-iyei_aWy0QtzmcwhhWS4ZBII2WpzjLN-ul6vmJ7KDTHVt-z2dRyD6jxIpB_1Qccimq89PoS_D_DTcXRgbsvg_X1UlMvz4MWhSinHEb5CVO0-xcC3Q2wTwQSP5sEZAQHOyY=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/76712215.jpg?k=f8e71cabc50a63569bd48a212b2d927f49e7a8806f8c894b7acc73fe2c9d18d6&o=",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/Gn7igI9m_zTWCnZ2t7efh00Rzxwt-cE3txv1ENNYmNHkLBRAFZXfzuTz_wfA1R6duvHWk8TVSKWIch87g5Muu8JiFHGqRL2Eknz2TUgOQAilBgxCsI0W-NONX6JEqsJNgcL31-ZXGHFUrkXRRloJ9_Ip9vf2cg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/76712245.jpg?k=88f1009aef1243bbfed10ca1465d50270dd792af04bf1104e5fcb437f9ca5bd8&o=",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/eU0PkAYC3ahkHSmCW_owiJhzxNMEsT9Ig2L_AP-90w9lIWQKRHoLOgG_BVZawDLMUKKu8l-R2fMYJiuxcFmWwyh0zuL3DmnCXQvMTq58l6c8pBk6Wgt41o3VbSoJcIXvR5MLAtXZ0E0mAOnogc8_AwRh1XmI0w=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/112215360.jpg?k=c9193c14b6b0476cd27de82cbad0da2aba2c7c4107fb450fceff329f0755176e&o=",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/terWK_dgDdnoZq_q4lHF5sanpWtq948B4HAEh5YXtK6xqCSD2NWAvP3ElUqqGMWoiGKvmlcNDLHAjicVlLfhkDoP6MRFeMz2YeZw_tNd6DAs5KksxaAYslVgfk4dDE3p-0znp3yCthKXasWqQuUgyt6Q4Zw0WQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/76712273.jpg?k=c2d0eb53bda32499e3c87bbb54038b44a3ac70ebd77b022e5f7ec6f1ff078bf3&o=",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/WCyvSwocy_Stw4T-DxOj7_k1jSKxlGC1sv7iIXaX7pG-8VrSFb6h2NISzTfleqRHzMiNcWBEQSpPHtnszcmb3xllopXMVxe7sUUYIzWwG0kG4l5oANDKY7qlBjQ7fL2f76e8t6H0tfnQUuxn_6BTQZDdglGJLg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/122922996.jpg?k=ea1f3bf6a4d9090fe5824684295ca339d701fbdddf7185a20c288035c3fbb137&o=",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/lo7YT5zqjWqyeKf6o78wlTPAZQm4gEKrCr79nNTPqNflnkhwX6zbW1PgmIV79uyBJ1TafSCk9042AWXMPKTTYlMWcnSDRvgbH_kAlqVFslFiRhrzVNlunwNAluX3y-Dn3NiD3lweSKp7J35x-b6gfVNfV5LcWQU=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/76712267.jpg?k=5015d7bb1f88192fdfc4999a0b121a33aa6e8c6d4d722929532e9dad3f3e231e&o=",
        },
      ],
      overall_rating: 4.8,
      reviews: 196,
      amenities: [
        "Air conditioning",
        "Airport shuttle",
        "Balcony",
        "Crib",
        "Fitness center",
        "Hot tub",
        "Outdoor pool",
        "Smoke-free",
        "Washer",
        "Free parking",
        "Free Wi-Fi",
      ],
      excluded_amenities: [
        "No beach access",
        "Not kid-friendly",
        "No elevator",
        "No fireplace",
        "No heating",
        "No indoor pool",
        "No ironing board",
        "No kitchen",
        "No microwave",
        "No outdoor grill",
        "No oven stove",
        "No patio",
        "Not pet-friendly",
        "No cable TV",
        "Not wheelchair accessible",
      ],
      essential_info: ["Entire house", "Sleeps 4", "2 bedrooms", "1 bathroom", "2 beds"],
      property_token: "ChoQgqyB-Z6wjZr4ARoNL2cvMTF2eWJzNGQ3axAC",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChoQgqyB-Z6wjZr4ARoNL2cvMTF2eWJzNGQ3axAC&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Puri Raya Villa luxury traditional home in Ubud",
      gps_coordinates: {
        latitude: -8.45868968963623,
        longitude: 115.25968170166016,
      },
      check_in_time: "2:00 PM",
      check_out_time: "12:00 PM",
      rate_per_night: {
        lowest: "$63",
        extracted_lowest: 63,
        before_taxes_fees: "$52",
        extracted_before_taxes_fees: 52,
      },
      total_rate: {
        lowest: "$63",
        extracted_lowest: 63,
        before_taxes_fees: "$52",
        extracted_before_taxes_fees: 52,
      },
      prices: [
        {
          source: "Agoda",
          logo: "https://www.gstatic.com/travel-hotels/branding/e89db943-92ad-48bd-9bd7-da844fa32f2d.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$63",
            extracted_lowest: 63,
            before_taxes_fees: "$52",
            extracted_before_taxes_fees: 52,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
          transportations: [
            {
              type: "Taxi",
              duration: "1 hr 25 min",
            },
          ],
        },
        {
          name: "Warung Bu Mundri",
          transportations: [
            {
              type: "Taxi",
              duration: "5 min",
            },
          ],
        },
      ],
      extracted_hotel_class: 5,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/LCefbFYTqsaBoA-lM6oNqlOm5c0mUDUVjIbluCa81Tdem94mGH7A8nBbW1veVRqLfG9DQqWcslthuTwaTK2eKxpx5jJzfmFkhJJcJd-wqWhCqXmE_UOMKRUB5fEJsJzC69K-yascS3JpdJSZwZnAc4U_m18xHA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zn6vvligey045NyaoYpJGsxbTo2bsMqiBjDTaBb_DhOS9TiVe0ZK6EAz8BzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4yXvghQ3nG9m-EOZqnW2HQ_LfhO30Ezy-jlqotlaUq_48O59smfY0hAsv1XpqiYbAdyFz1_WjSYfLw9aZE9Rgh64AZ_KQd1YCILeWm2CI4SsWrhdmozhwvF",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/RrzxKSKZuI3shIJiA7epBY8kLa4airVu4pdHAzHdPOoC8dOF4WP7Cfw8MwBRNQTXFjO3CUjlLssFSvDINopUEyJ-411_gr5WZt1uT2PyRavsDNNUqMbVB8nJfAVZagrzBFR8httdE06gDePL6RGciMs4UJT0UQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zk6aIhn0uxmRhJhTeA64W0hzg9kT0Ab3-lkCfDIvGpJ-3PjZm-o38CG3PAzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4yXvghQ3nG9m-EOZqnW2HQ_LfhO30Ezy-jlqotlaUq_48O59smfY0hAsv1XpqiYbAd_FxN3WDSYe-E9DpE9Rgh64AZ_KQd1YCJ87jPiBDdINMgJuUTq6-qU",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/MQ-LbN25_WVCtF4X7PA9cVtMPhcXndlh30KrWdPkzF2sL6BXPYHzg_DonH3yywOMYA8Zxg__qqPMXac-1a7ww-m-8TrPaTgTsRZGRzki6AxNyK4qD0CvjxlbGFaL9rdGaX2XdBHnLvscgZmqHuG5Oy6pdgl01xc=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zo7vrrmJw8GEiF0qPca9Bx23z-WLWBombrz7sc5P6v5qMPips55XZBV70AzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4yXvghQ3nG9m-EOZqnW2HQ_LfhO30Ezy-jlqotlaUq_48O59smfY0hAsv1XpqiYbAdyFC1RWzW1bLg-U5E9Rgh64AZ_KQd1YCKjiJyMsW5P-T8XllNvpd5j",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/Fz803MuFh2BmP_aCxN5Dz7v2kmoa7xFMnhnjpQkMypGR8qGr7PKZbC3G4LXrojrrs2eqPHzbOZBH_xp5MqflBNtmhXaNYC75pGnYn0vC5sy5qeMnBzfV7Kk7PFBQD-5omJW4OGKVKn5t5ZN7jb4YeYYVD4y-VEU=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZuN-55n4e5FUBDBSOcaBz5Rj-gCTLEpWI_QPldarn-Ka5Phdw2ZXeEnG1BzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4yXvghQ3nG9m-EOZqnW2HQ_LfhO30Ezy-jlqotlaUq_48O59smfY0hAsv1XpqiYbAc7FS50Bze2fL4-DpE9Rgh64AZ_KQd1YCJ7RuExeUNOqPT-FDQC0No6",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/GJJA_SuvzZV68Adqs5QdKXjhgyQTdXdb1ka4Xia1Io3lxFWHBG39aEZGODvgy4PJAJJU1RJv2VqCiwwEGm_i0Eou0teDEKgchrAc9pQesDtw-52hEtQi7NAvWTXKKjBJHdxuagmKmM9wxK-cEq8hPCHx11XkyQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZuJnnkhoow1EQbjy-RKRlzGydsFDwIq69iUneEajnn7GyAT9r9-rgKl2-LTF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4yXvghQ3nG9m-EOZqnW2HQ_LfhO30Ezy-jlqotlaUq_48O59smfY0hAsv1XpqiYbAZkFxNzWyOPYL4-U5E9Rgh64AZ_KQd1YCJmkceKJUym5c7zHD1lR9b7",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/99VHBJukGhR-0bZ8yHvGTT_BscERWiQEadFrrtMsMNuUTUyfvYlvKjBUfhcm2I7rdU6yO3eY4MQmeIflsqutvIJMHte8fk2aM05McSk7UHyq7BzBmslvhD35aQAQqfsY9SL2lv5787NNVu9TUCEJah1viGQapA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZiIiHhCI24mYDO1LReptgtTiSoiGONK-Hmy_4Cbf8iZWiDgxOsojEFFLIdjF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4yXvghQ3nG9m-EOZqnW2HQ_LfhO30Ezy-jlqotlaUq_48O59smfY0hAsv1XpqiYbAc7FT13WTSmXrwpDpE9Rgh64AZ_KQd1YCJ0k-5pxmSa7535QpTtF-_G",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/kx3bJ1u13l8pemha1Y2dtkFLxk4JTxct2CUqXQYnZtiL3rd_pEXAdTMtotsVAFB4Wd8l_sgVhOkoaSUiV36l-RzPsovo78JhMZPVSwLLAosIa4Bu_W6jS-xk-7WD6cFe1EqJypqMcLXXPmzOjRhSkWPhecXAt8Y=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZpLPvsTYksyBrJB3KQKZPyQCGslTeQ5WSqy7KcLn_-eztTCBM9Yf7MgO3OTF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4yXvghQ3nG9m-EOZqnW2HQ_LfhO30Ezy-jlqotlaUq_48O59smfY0hAsv1XpqiYbAd_FS5gAzeIf-Q9aZE9Rgh64AZ_KQd1YCIsbnnqTKllCzgATBFtuJNh",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/jFYK8cdI-SMVyQDQk7zYxBPBspGJSrRuJybVgLfcuQpuUUWw7QeM8RelXL-S6B4Cms9B4uN2tcWa48dILngmdRmiYTiMMpS957cAGbX1oQsCo54w30LOasoyWNd98dC3WcIraPVhCi7YMRFvz6zrfYWgNHgfFGY=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZhbeM4zwe_3AiPROqZrV54ifZhmnIRL2_ljHuE4zoiIalHlVK1-z9CH7HOTF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4yXvghQ3nG9m-EOZqnW2HQ_LfhO30Ezy-jlqotlaUq_48O59smfY0hAsv1XpqiYbAZhFBNwAjW1bPQqaZE9Rgh64AZ_KQd1YCJ6FneK7IENBRnLvncnquRk",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/RE2e1FnocQTGCANanGZ6vf7uDYcZfVPQB54iN5_u5LkDpSkEPr07QojYmIr86yVohHnqkw1-KK3BF3VzHq62b8c7adC32rob9LgUxOfj_NiUBLGqZ9BXkNp-Q-xvG78htv3_OACikmjUfdbfsUAHtS7zr4BdVkE=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZjYabpRY2sX4TKSa-V69S4AncuFDIGp-Avk7aN4_EqqXkDy1v15_hNGDRBzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4yXvghQ3nG9m-EOZqnW2HQ_LfhO30Ezy-jlqotlaUq_48O59smfY0hAsv1XpqiYbAdwABN4BiO1fPQ_eZE9Rgh64AZ_KQd1YCLtfyL6nr4UjMzVVmgo8Zps",
        },
      ],
      overall_rating: 4.785547,
      reviews: 64,
      location_rating: 2.8,
      amenities: [
        "Airport shuttle",
        "Balcony",
        "Kid-friendly",
        "Crib",
        "Hot tub",
        "Outdoor pool",
        "Patio",
        "Washer",
        "Free parking",
        "Free Wi-Fi",
      ],
      excluded_amenities: [
        "No air conditioning",
        "No beach access",
        "No elevator",
        "No fireplace",
        "No fitness center",
        "No heating",
        "No indoor pool",
        "No ironing board",
        "No kitchen",
        "No microwave",
        "No outdoor grill",
        "No oven stove",
        "Not pet-friendly",
        "Not smoke-free",
        "No cable TV",
        "Not wheelchair accessible",
      ],
      essential_info: ["Entire villa", "Sleeps 2", "1 bedroom", "1 bathroom", "1 bed", "56 sq ft"],
      property_token: "ChkQxqDhuv67ybByGg0vZy8xMWtqNW1icTcwEAI",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChkQxqDhuv67ybByGg0vZy8xMWtqNW1icTcwEAI&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Bungalow #4 @ Adi Bungalow Nusa Penida",
      link: "https://www.agoda.com/bungalow-4-adi-bungalow-nusa-penida/hotel/bali-id.html",
      gps_coordinates: {
        latitude: -8.688435554504395,
        longitude: 115.48900604248047,
      },
      rate_per_night: {
        lowest: "$14",
        extracted_lowest: 14,
        before_taxes_fees: "$12",
        extracted_before_taxes_fees: 12,
      },
      total_rate: {
        lowest: "$14",
        extracted_lowest: 14,
        before_taxes_fees: "$12",
        extracted_before_taxes_fees: 12,
      },
      prices: [
        {
          source: "Agoda",
          logo: "https://www.gstatic.com/travel-hotels/branding/e89db943-92ad-48bd-9bd7-da844fa32f2d.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$14",
            extracted_lowest: 14,
            before_taxes_fees: "$12",
            extracted_before_taxes_fees: 12,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
        },
        {
          name: "Warung Warisan",
          transportations: [
            {
              type: "Walking",
              duration: "5 min",
            },
          ],
        },
      ],
      extracted_hotel_class: 4,
      images: [
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/nSD0wgIp-JBa3H0tCRnjfUJREJMX1kP5VViiy9omtLTIryWB1VTW35CXzl_st4xzcKXFvm9lG7v1UoWJsk4625218Y1uLcMyuu8n0lNnDIJ8QNY9qeV2ufLfrJX8cmWj2UEBnRqfFOLtpc94_4xNU-dwDbEPy2Y=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/19020032/0/179165d7ea01dbf161c80f88f24e245c.jpg?ca=16&ce=1",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/aUO1rKSP2YT5ZNEoqaHWl3KaVVZTSCm3vAVsuvvLdlLvO4iiAJquv7FiEA8P_U4ZcJFTVP2fJidGXgkMDdIpGroTw7Yo7pGu__9sU3EwJoE8Vrwz1_t8veeg9NjUwdHut1kirQzmR6jUg6UzWsnc3QcfrKQWMxE=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/agoda-homes/19020032/a8e58c8777bac2e1aea2c0cdad11198a.jpg?ca=15&ce=1",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/mRwZqqKN8ezPiIlc59ddufagUyzCNiMoSlJXqFVu_GY8-05EP8z6aeRHwwcMb4x2UwaqAPf7nPCpXIWdYNmqJNmex5Asg9LKc3P4G7p0SL-5XtS7T37ZMBTC-M2gGAJ_0o3zE4WDNZttCfu0Z5nrTfBqpzCwoUY=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/agoda-homes/19020032/0c2a235a68e6cb3b7a1bd7cc8b80fe08.jpg?ca=15&ce=1",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/24oV41TRJJFp3kb7pm8rnN54D1r3bbYQh9FMQ8vF46AzEF7AHuGG66DlS3LIEV1nwvmlDp0jrcZb7J6yR6OwtL7bqvFjQbJQ8pzLk4nHQaAnwUqgOk1cpZbYejb3gbp-8EI_K-2SdYVqBATr4IXjlSITSZolEg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/19020032/0/049ae0d4004cff76f115f93f155e882b.jpg?ca=16&ce=1",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/s8AXXAKIXOaptojdbvIhTPNux4ZCzkp8YmC1dHvRdDz_LtyCKkfj0CgIp_o3ezUOVRs1rg9vUCe8MKQubNEmPwoRagLA24jWUniYbKv9kTlOHABJAKlNrB5Qd7X_4qXFilvfYi_sLeJ-bfnXBLW4J0CwpqdGIA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/agoda-homes/19020032/2c55451c2b7e1663822beabb2dd515e3.jpg?ca=15&ce=1",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/eR70eiAuc658oEW0yx8KVoha0jisTeVv4eiubMQRNrRC6zoaQF3UUA420Y9qgtr84kfcEp7_4lfZQExKgBf-OGa_wynmG4llVE2q2Dd-flgk5YpNvcV5Wx7Pbg1XTAWPy9Axi8se9Rlt0FfhxuWLVN3e4tXtz7A=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/agoda-homes/19020032/5d142cc81e07ac0c7f17f3f03d3c7b81.jpg?ca=15&ce=1",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/a22KpFA8mjLX9JQJE7WVBKkXRY2vqBiJSQj54XXHjIbBcYZS0Gw_fPi7-9Sa0l1wYEB9_D71qBC2dN-LEFvGiAqAdHaqeEmW8O3JWhlFQhl6kNc6V38FEJ8ORuTfz59AXyTLS-H-eUdpvJ2_rpxN2Cfa_1TvOfo=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/agoda-homes/19020032/0742b8e5346577a3f3bc7df02df9ffb2.jpg?ca=15&ce=1",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/kdgKaVO4coE4ghAY41ZZOh2aVQS_S2GEQ3pVULs7GqQHN9KkEAn0FVqRp1WsOX66arii5qHta47cz3iAP4lkWB1GcBsLcl-BMmepz5F2-TXJc0_Ow247uwRyjKwFvcZf095ioJvBUuZhH8_KlRl3F8gAfVPMeOM=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/agoda-homes/19020032/89cc585b6b9aff61be180c0c6e696902.jpg?ca=15&ce=1",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/qEcDxGHwEYvJD2kYLjwcZXm-STK1JX2v2copBZhqJdBOSVcLSiOZ--UMdmfoP_2S2wlB1KEPx-oOetGIrj0PmpmrWIaV3y6ujOPx8uSLpma8BymKlou3rYYBVUN3DMVk0llY3IpiXu3k9XV4XT2jUUapZMTROg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://pix8.agoda.net/hotelImages/agoda-homes/19020032/854b6f7bc7b7bde07c136a091a89c16e.jpg?ca=15&ce=1",
        },
      ],
      location_rating: 3.3,
      amenities: ["Balcony", "Outdoor pool", "Free parking", "Free Wi-Fi"],
      excluded_amenities: ["No indoor pool"],
      essential_info: ["Entire bungalow", "Sleeps 2", "1 bedroom", "1 bathroom", "24 sq ft"],
      property_token: "ChoQp_qevZGhq-btARoNL2cvMTFsNmowdDluZhAC",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChoQp_qevZGhq-btARoNL2cvMTFsNmowdDluZhAC&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Danakha Villa Ubud",
      gps_coordinates: {
        latitude: -8.460028648376465,
        longitude: 115.28150177001953,
      },
      check_in_time: "2:00 PM",
      check_out_time: "12:00 PM",
      rate_per_night: {
        lowest: "$69",
        extracted_lowest: 69,
        before_taxes_fees: "$57",
        extracted_before_taxes_fees: 57,
      },
      total_rate: {
        lowest: "$69",
        extracted_lowest: 69,
        before_taxes_fees: "$57",
        extracted_before_taxes_fees: 57,
      },
      prices: [
        {
          source: "Expedia.com",
          logo: "https://www.gstatic.com/travel-hotels/branding/12590129945800583137.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$69",
            extracted_lowest: 69,
            before_taxes_fees: "$57",
            extracted_before_taxes_fees: 57,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
          transportations: [
            {
              type: "Taxi",
              duration: "1 hr 22 min",
            },
          ],
        },
        {
          name: "Chang Kitchen",
          transportations: [
            {
              type: "Walking",
              duration: "3 min",
            },
          ],
        },
      ],
      extracted_hotel_class: 5,
      images: [
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/XsppOPRm9AgvuuGbC0TGIrRWz8Xt-ZID9IaoonMnH1ve9FK9kPK_nwwMDZtKcLOyuusSPEe9jrKxQkfeXXLtO46jvfOMijYvn_GG-dDu8pVJSdo1VSGY-5RuOVvvI2FopBt1VIPrW_w-h-QK_HaIglg9UU4wTg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Z04ebriQk93kwCTONV79E9Wj5rk6LBomNrCDECpfyhpPgEyhTy5zGIlvyITF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zYvBhQ3nG9m-EOZqmY2GQ3KPhO30Ezy-irqpttakqv_8O59snRY1hIsf1HsuGYfAc6Fz5jWiCIVeE9eZE9Rgh64AZ_KQd1YCLTsra-xcmHFpLFQ6yYHZUP",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/iZFf3RWGWn9Fd1PiuBNzmPxE4_Tu5PZAc5MsbZazwQgDpiHPOp_6JLSbR6GPdfGWoelqNhb8ueODyOHKkodwgsOy2GENZ_TyGOIZaq1e9uzkQXBSGcLkeOl_6Qi-yk2kQKHqAcBN4WQWRbCo5fuqlk__pUUeIw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZpIfvnDkSsSQnJgiGTMVy9hHCqkX_Ee-k4wmFCr_SoKjmC1d-05HpCmD0KTF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zYvBhQ3nG9m-EOZqmY2GQ3KPhO30Ezy-irqpttakqv_8O59snRY1hIsf1HsuGYfAZlFwNZEzSIe-Q9U5E9Rgh64AZ_KQd1YCLMl_RYdCjeU-T3K8lrI9uJ",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/-rW27Uzh7cjfKE_EFNXiDh8olh8DFVVhk57S6jNYU9Q5DDtT5vIFmzrNi2d0YxZAg4aQPxVERKVom1V4Eae2BzZH0sRDB9CIKV8_QCLetL2J641L69W9zNy9oNTsf9jYLujqLuAX8Jbp9zSK14-6JKDOdPsrHQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZgsCJhwoqySJjHy_Va6EW8ijJ9yDvGYapoA37A7n_taqSCzAXy7H7JmXWejF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zYvBhQ3nG9m-EOZqmY2GQ3KPhO30Ezy-irqpttakqv_8O59snRY1hIsf1HsuGYfAc9FBNWADemdPQ-aZE9Rgh64AZ_KQd1YCI-70DFCsasPbnQJVoJ8mun",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/A791eDUym5-5ulSHNuag7g9LqpwBA3S1bRmvSXm0Vr4S6RoHgKApbhpounCRq8UeSUih7FoShqfRa3K0-2HSRGU-hYJSvIQI16jseGturITFCCdMBuX53vHk4CQYllkLAGHl4esI4aU4y4RxQy983WSUbLKIlN0=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/90000000/89980000/89978100/89978030/77a394d8_z.jpg",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/0AUtjSFolcmBEp2EekSH54lURdn2_TeKK1w2xL6WCX0HpPcMyx-fNU85wPFPMhWVtrWX7lPNF6lceZ77b8La51BUyQH6KEBYQwkO_pw_2NUknNPa2g6spZtmaZNsf7HUvS-wE22mAvMRRP0j8OHYSL7_BCp5_Q=s287-w287-h192-n-k-no-v1",
          original_image: "https://images.trvl-media.com/lodging/90000000/89980000/89978100/89978030/a30f348c_z.jpg",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/xm5WqKa1R8a_IScMbbzrvOFEH09FSKDD9TfoQCNQrhjDbA-yAJ1ruhS_3KgPAh9UyzzDzM8ioO9sFk79T6IRNAmW3oZyNvjlCSeckvDuHndTbo0DKhyDRA3mxN0WL7IfuRiprRk5KP47UfQsjdMXXCpJpdb4qQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zp5eYkD00w3UiKC_Xaph1zQn5sUDgJo2Au0jAEt_f-4SiPDUT8JK5BX_1GzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zYvBhQ3nG9m-EOZqmY2GQ3KPhO30Ezy-irqpttakqv_8O59snRY1hIsf1HsuGYfAZiAwN0AyOIb-c-aZE9Rgh64AZ_KQd1YCJpT3H4OsGyXO9BzJYvWcCG",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/HEM_dRx9znTO1R8F3rhF6Qm33nsYspk_nGUvivA224Ls10twOAdKqUqHMmv4tmviqX77vvXv7cuw_xOyGlCk8X5ilxTOKs1mPgrSr4DlyJ8R2i_PtqF1LYe1Ue3Wto-RtxpAUZqTP1XoOL1rU76EiaVouE10BnA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZrLe-uC153WUINRHef4N58wrtqXvDFICSgDzmCoDwoLiiOhFX-7_HDA3WfjF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zYvBhQ3nG9m-EOZqmY2GQ3KPhO30Ezy-irqpttakqv_8O59snRY1hIsf1HsuGYfAZlFz5_EjSmfLkpDpE9Rgh64AZ_KQd1YCJyPnOX-WNE_AYs7v9aIoAt",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/Cj9sFyyEff7XHMRp4K4XuXJ7NNnUQNSs66hyJisETidpn88vDW3H-z0ycLk6Jrz8CDvIqQHXDb5Xxo8MJ1pLiqJXvtLCAHdkVveXR9lEQ7ocyMKFDBgjr9wl2he9HyUeWAVOpMLkT7cigSquwTPnIDaCCXaE-K4=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/05/12/4bc2bdca-1fae-4921-a7b0-82a78a82e4cc-1652323523872-326ca026596b1578c1734566643ba720.jpg",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/1bEGOy3dmQ42PTNLHck8-ieh2iDguKXmRnkk3IequTevrzVnTW1x-BID2u38G_oMoAYpM-Mp_9U-4TX5cERofYN16WFWPqzxDBEIaL_dreRmERoqBxafiRCdl2sfre3SVZvwKOoaIfkO71bMw-Kgh5e6PHmOfA=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/05/12/87c2f3c9-3a18-40eb-a3f8-afe0e70dd72f-1652323524179-97ad15fd71998e21c9a12278c9b26366.jpg",
        },
      ],
      overall_rating: 3.9830174,
      reviews: 65,
      location_rating: 2.9,
      amenities: ["Air conditioning", "Outdoor pool", "Cable TV", "Washer", "Free parking", "Free Wi-Fi"],
      excluded_amenities: [
        "No airport shuttle",
        "No balcony",
        "Not kid-friendly",
        "No crib",
        "No elevator",
        "No fireplace",
        "No free breakfast",
        "No fitness center",
        "No heating",
        "No hot tub",
        "No indoor pool",
        "No ironing board",
        "No kitchen",
        "No microwave",
        "No outdoor grill",
        "No oven stove",
        "Not pet-friendly",
        "Not smoke-free",
        "Not wheelchair accessible",
      ],
      essential_info: ["Entire villa", "Sleeps 3", "1 bedroom", "1 bathroom", "1 bed", "753 sq ft"],
      property_token: "ChkQypuSxZuZo_EoGg0vZy8xMXNzZzltang2EAI",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChkQypuSxZuZo_EoGg0vZy8xMXNzZzltang2EAI&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Ubud Hidden Villa Yone village",
      gps_coordinates: {
        latitude: -8.503230094909668,
        longitude: 115.27198791503906,
      },
      check_in_time: "2:00 PM",
      check_out_time: "12:00 PM",
      rate_per_night: {
        lowest: "$73",
        extracted_lowest: 73,
        before_taxes_fees: "$60",
        extracted_before_taxes_fees: 60,
      },
      total_rate: {
        lowest: "$73",
        extracted_lowest: 73,
        before_taxes_fees: "$60",
        extracted_before_taxes_fees: 60,
      },
      prices: [
        {
          source: "Bluepillow.com",
          logo: "https://www.gstatic.com/travel-hotels/branding/190ff319-d0fd-4c45-bfc8-bad6f5f395f2.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$73",
            extracted_lowest: 73,
            before_taxes_fees: "$60",
            extracted_before_taxes_fees: 60,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
          transportations: [
            {
              type: "Taxi",
              duration: "1 hr 10 min",
            },
            {
              type: "Public transport",
              duration: "2 hr 18 min",
            },
          ],
        },
        {
          name: "Padang Sidimpuan",
          transportations: [
            {
              type: "Walking",
              duration: "4 min",
            },
          ],
        },
      ],
      extracted_hotel_class: 5,
      images: [
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/t9xR1poAiowTuJ06BoTJ4qs3YHoqs8L4YZMx2lWwRkKGtSlDeGY4-ZkLOaHdf5Hb9-n6IiTkCvh7ObEvo9TibBEXGofZiubtTm6McUtixBQn1Zywx0YQBTAj2BgetRz_Jxf44U5kuxcTwIoiYPZsCWhiLaORAQ=s287-w287-h192-n-k-no-v1",
          original_image: "https://az712897.vo.msecnd.net/images/full/c0bc554b-7edc-4f58-a379-37f588d25d8f.jpeg",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/-oRQqYqWXECD2zxhUXCCQZb3Qf5YQ2ta5VJJHoRMYOIYWF-DGt88qvzNh4f85TfsfIji3ibSDQVow5l31GQumr229Xmg6BYi5a9MRRjprO-SgP56dH9oVkBjPEuySgwQH0_RojKZ4MdyF65SON4G2tGKPrd0J58=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZtcqY5CNx0SNmDAuPQal6rhTqhXnYQo2-9jfeNNenmJODEhdj3pbQUXXQejF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zevBhQ3nG9m-EPX8if2nQda_hO30Aw4omqq4tTLkiogoa635rVYkhA-P55tquaaHJ_Ay5rEiLRWvkRUepgJA968jukxrfMNnn9QFx0Mf_p9Qvz",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/kVLIJie0d2-IA9MHhuS66_5G8yOkE98SW8u-0KkHop3c44zeuv9YwlrK7u4nNexsC7QwxWuzfNETewxe7mdiaECZjqp2rLfpzMftWEwh7Mg0pleJXI8PSp7fHeiBiluVQ4ODR5Q9kpEAYkUmlNcgMpuErge7IqQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/183919429.jpg?k=4c9bf554d1a6e2577c1e02befcf9e4c4f0a406de4be632a41555f12a92f3f791&o=",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/JSmUn1CTsijOv3kt8-RQJQAh-q16THYXgfUUUcZ5_Kd1uL-GSWkXbnr5Gid_rF1rGq9g2tQGOl6GtE04Ba_mSu87aJCOniGvQIuUx7mWOBbap71b65D6dWEg_laiF5C9a8JrwQk9zeUhayySvEOWsTOJ1yalTQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZjMWotCoIxScaLh61e6BpyDLbkiiBFpCbiFTuc6Oknp29Ix9v6pTVCHjWPTF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zevBhQ3nG9m-EPX8if2nQda_hO30Aw4omqq4tTLkiogoa635rVYkhA-P4xufGYe2o5Ay1RXiLRWvkRUepgJA968juU76SP971ZwKaK_fxqXctI",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/wreFFRLRR8FZGbneMe5gUBMkCitCUCXvQBL9E75tHh5X1T4QrOKP2C5TfySKeB3vtw0e3gH_Ur_wHDgjUm9KQKTeoFyKuYpi_ucJbzJvx5wvx6m9jVUmtd0w_9yG1Seg88ogltXsS0uk8Kh5CGCeA_s7dPXuzw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/250241972.jpg?k=13a5af8e969eb09174ebea3491d5d63edb5ffbea8951f6e76d6dd86f47ab2ddf&o=",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/keS-tbT8VTTX0L3a0nNhZCswuT2976DINFkDt7bS-j4cZY1IyYNYfBQhyaJUu0jSChuX1_-MrOVh7dw6Rt6trnLo5Tbz6JcMiAB8csdqdnvxB1B9VZtlhWTasIeQnqYuoe_vdHGQwoiFDw9svmty4cJyevgKOjQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/23247520.jpg?k=221879bcc2235e5a09ab187b12f0f4ee777af1c3214e107e3eef331602f0c622&o=",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/ZJmTutC5ygDi9U9TnGpkxTxWwIT0HMsiBXxnbd3v2vFAbNDRCAYita4Nu0U9QHTRMnAE8o3KCtL2Ld4AVz30dIVWUNtLFViMHsbmHhVvZbCTFRn8B_-vCFiO6aUttHRFl1G0L-GBnhc31nISGLdrixKAClCCVyo=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zvpq47icU7y8AFAuITbQa9i3R9nT_Iu74uTrmcYSi9oS8GBdL6o7gJXW_KTF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sGqAEVmr2qjQMPI095Pdv3pEtFPIxOxxOPC-YWoFEg4zevBhQ3nG9m-EPX8if2nQda_hO30Aw4omqq4tTLkiogoa635rVYkhA-P55pqiMUm45Ay50AyLRWvkRUepgJA968jtnpjE0aac4yX5oFHTEtaux",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/aCombLuS92SGUzQdCqt9ef-m5UojiSJb5hkXI6DebBEyXF8npK9Vs0FXRtSG3lg01xYIAxRj3O-SDbFOVak4A2OYyp612aM7XaSMeK2e6XnXDOAWvkSTXkfxtkPu7t1htwanBcRV7f8gjSNmeVdLgdgURDLpnYQ=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/183919471.jpg?k=579715ea2497c69767689bb025ee2da9166159c3f2b00c8b43ea2a0f08701094&o=",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/007VyAFZO0tW5IFVxxioKgmCx03jzO6c7p8jLEhwIIdv81xgWBrdftRgKkFTmEMzNoi0ICdu6PqFRKA0XLhT2ZPXD5mlJ-sm8S2ODPiRsC7iFyhkSPesKzu32hhHzUuqpXtosfgpwaEf6u_YfMPdNb1Gr12thw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/183919404.jpg?k=be7bce80717b013c76b0b9a7989e9f7e5d6787fdd1b5db9029c15993363b6a71&o=",
        },
      ],
      overall_rating: 4.3649554,
      reviews: 224,
      location_rating: 4.1,
      amenities: [
        "Air conditioning",
        "Balcony",
        "Kid-friendly",
        "Crib",
        "Fitness center",
        "Hot tub",
        "Ironing board",
        "Kitchen",
        "Microwave",
        "Outdoor grill",
        "Outdoor pool",
        "Oven stove",
        "Smoke-free",
        "Cable TV",
        "Free parking",
        "Free Wi-Fi",
      ],
      excluded_amenities: [
        "No airport shuttle",
        "No beach access",
        "No elevator",
        "No fireplace",
        "No heating",
        "No indoor pool",
        "No patio",
        "Not pet-friendly",
        "No washer",
        "Not wheelchair accessible",
      ],
      essential_info: ["Sleeps 10", "4 bedrooms", "2 bathrooms", "8 beds"],
      property_token: "ChoQw6bpheeO69_dARoNL2cvMTF0eHFtYjVocxAC",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChoQw6bpheeO69_dARoNL2cvMTF0eHFtYjVocxAC&q=Bali&vacation_rentals=true",
    },
    {
      type: "vacation rental",
      name: "Mirah Guest House",
      gps_coordinates: {
        latitude: -8.405779838562012,
        longitude: 115.28726959228516,
      },
      check_in_time: "2:00 PM",
      check_out_time: "11:30 AM",
      rate_per_night: {
        lowest: "$43",
        extracted_lowest: 43,
        before_taxes_fees: "$39",
        extracted_before_taxes_fees: 39,
      },
      total_rate: {
        lowest: "$43",
        extracted_lowest: 43,
        before_taxes_fees: "$39",
        extracted_before_taxes_fees: 39,
      },
      prices: [
        {
          source: "Bluepillow.com",
          logo: "https://www.gstatic.com/travel-hotels/branding/190ff319-d0fd-4c45-bfc8-bad6f5f395f2.png",
          num_guests: 2,
          rate_per_night: {
            lowest: "$43",
            extracted_lowest: 43,
            before_taxes_fees: "$39",
            extracted_before_taxes_fees: 39,
          },
        },
      ],
      nearby_places: [
        {
          name: "I Gusti Ngurah Rai International Airport",
          transportations: [
            {
              type: "Taxi",
              duration: "1 hr 32 min",
            },
          ],
        },
        {
          name: "Warung Dong Gaul",
          transportations: [
            {
              type: "Walking",
              duration: "3 min",
            },
          ],
        },
      ],
      extracted_hotel_class: 4,
      images: [
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/Wpa01CDPITj63eTp7Tqzjjw0fT1TZGRMYAhqPpuseTh1nrQ3ugYI1mXGkJhQFVQspBUJe5gKrP1v1QaJ6skrDzZd4w-snSlWgMoQFb_NNX7G7wUPDJ7pwGyeaxfAq8_WFcSxQNPjFqWL4OQDDSw1zG8_OoOD8hM=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZmZ_s5Ssnwm4lMQWuXMV6wCbzuGXNEpuJnQjQI4_fiZSzNjxUz6S-MGPvCzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sHrY9VmP2oVsLB5Ip-_d7po4WFPszFWsfHTvAe45RrvXZvwhEnXCUquEZUr_G51U7vlNx7mjSPvmadr5DXXq6zw",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/fexN5BSaaHtEDs4QJPMcz2GWTQ6S5MUJncQ782qHiP9iU9K5TaywsesKGMDrGu02VbXQms3m_0DrzLYS6pByeobPr2uWjdFKKI_x6CuPX1fwsOZ7G8W4-BQ-oj1mueuSSZ77qDsqVfgKgGRFKNDjRMFyoxoQlw=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/207759244.jpg?k=840f962cdb18fae7ce91c44f522be6acdf3cc07e66528b640c7ee32fb1fa0a9c&o=",
        },
        {
          thumbnail:
            "https://lh6.googleusercontent.com/proxy/udlM-9qwLoF75eW243JviwLoFzrCFItJzqM6hADe2Aen-OSak8Pkp6T1zvEUxczPIRcNrARrngOYTZo7tjS0_Uz9HKfkVeVKAydKdC5x-fTgSqqkpMrsKRFYZ-IBlhU6i3lNGAjEbQldKhxJEB9tJhFrux8tVis=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZjKKevBoVy34eHxmMcY5K9heSkFjuBqGJ-k_dFKekmo-eGVJU55zHAHLcPTF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sHrY9VmP2oVsLB5Ip-_d7po4WFPszFWsfHTvAe45RrvXZvwh603CUquEZUr_G51U7m3qBSdDd9Gb0iyD1EAnpmA",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/K_WhzIuVdrRNFBzZRnUEn3I899jsWX35YlVOWC9m1E21c37GNLZZaUvqMeBLP4uCY8f-mGpG1PIzMSGvxN9QgoVr1Tv6bTZhRtMteudbIcBcMfrN7vZ_aRuriJawUgld9QqLUetgwxOEbrhYogMeXIniiRWQoxY=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zk4Gm5CsmqkcFOjOeeZcRtw_CpX3YM56s_B_7MYDkjrGzShZl3ez9Um_kITF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sHrY9VmP2oVsLB5Ip-_d7po4WFPszFWsfHTvAe45RrvXZvwhUm3CUquEZUr_G51U7FRm7Mo9N3sGG-3Yh6vh-OQ",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/t65AMB64JUee3V4Tv0114o2NLyES_jtlBlQxQ_w-HgFfRT7r_5JSBJT4gzgeKykny4XGtMQwMfDSEfyO2iFY4i0xpFqgTjiUUZ1X6Y2dsxgzY8ySBu-ZjjNgJ8PddCVmA0DSvX4FeC41s2awLZW4M2ow8Bd1Eg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0ZoZuWhnsAyW9rLyzXTb5F5iiSqiHzHbKupCPwMIjzjZqlFyVj_pzJC0vIfjF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sHrY9VmP2oVsLB5Ip-_d7po4WFPszFWsfHTvAe45RrvXZvwhc03CUquEZUr_G51U7Ih91sLmeb3OJxh-zhLG63A",
        },
        {
          thumbnail:
            "https://lh4.googleusercontent.com/proxy/ABXWC9GsoFkFnYpx5Rk1XIk2dDgDsT20WZEzhF5K5Rb_6ywkSIcXZ2JOKe8v4KjLlD59xlbrAoZTLBgY7ma1VpHX8fm1gkFtQYr4NriDxudHC9nhJtTBy5uX77PBR5Yvj7YzUjmzaEZNrhp8C1m5oHNXdeFOMg=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/414473151.jpg?k=e6fc4f39c422abfcdd02f144a2be08a536e75b1ef34c32dc5c1875b9156dbef7&o=",
        },
        {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/XeClzMsUowunlj0xrgkl3q9rUiuhfY4C4tmArnvRNGQDORp6OMQ22UVYi01F-aHL4jxWj9br2VxBuyW6gSMQVo-k_tBs2oGIS-F6uA5IwNMEq14SyQnKxwrdDJLxpOcUjYX7F23Vq7pCW5JNzOo9HsfuZg2ZSeI=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/239041144.jpg?k=375f2c2262c16d5820140db05d0fb4130043916b109030d502b0507b4600b506&o=",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/p_kSk03VTpLwS7Y-R0y9bfKUVIZMM0A9tEDmU46wDkha1coAa_byO9gJLRZG7FxuB4eqlUggkL37BXTcV9nQ3CYpAP95PN0ggyfRtyTUQE6Z1dO4vGvtGHdcSYEYGquFB-n-3gdrpDprL4--IhHGJSBhMkZNarE=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1440x1080/207515953.jpg?k=25e4a03cab3530bceb5d7cb541bfce0ffe32c912524fa248b4eb2ce8eae7ba38&o=",
        },
        {
          thumbnail:
            "https://lh5.googleusercontent.com/proxy/D1gNiQxbmC7qWHq1Xbdzc0Jb5L_a-yVxXJnfXRoPuf1T2wx6RKiqFsFXnMm0-2XCvjTml9HE5g6T-fd8MqVwWjwJoeyMLJQud0BfWT-rZwa_u4yG90oI1sf6tHa0Sb4B_wBMEdBO_Z3up-8dCMeWbXfQajH0gYs=s287-w287-h192-n-k-no-v1",
          original_image:
            "https://p.fih.io/v2/nSr0o-3gbZN8o1xMecXCcG-BkDeQVo3k-wOeVogkTe7ajuFOX7O-WA8aRWhXz1jsToZif_TsA_xCWfhWRa0Zu6u9gwEo1mI4KiehaJBNsRnIk2PwP4-dqTvvfoyprpG7MApzp-T3LHvcCzF4en3ketkYyx1j1dLbUfhlOgkNcIcn9PwNtk_AU2csbUk6dd9sHrY9VmP2oVsLB5Ip-_d7po4WFPszFWsfHTvAe45RrvXZvwhI03CUquEZUr_G51U7uhTuV3UwNIEX5PHojEF5Ng",
        },
      ],
      overall_rating: 4.667308,
      reviews: 182,
      location_rating: 3.3,
      amenities: [
        "Air conditioning",
        "Airport shuttle",
        "Balcony",
        "Crib",
        "Indoor pool",
        "Outdoor pool",
        "Smoke-free",
        "Cable TV",
        "Free parking",
        "Free Wi-Fi",
      ],
      excluded_amenities: [
        "No beach access",
        "Not kid-friendly",
        "No elevator",
        "No fireplace",
        "No fitness center",
        "No heating",
        "No hot tub",
        "No ironing board",
        "No kitchen",
        "No microwave",
        "No outdoor grill",
        "No oven stove",
        "No patio",
        "Not pet-friendly",
        "No washer",
        "Not wheelchair accessible",
      ],
      essential_info: ["Entire house", "Sleeps 14", "7 bedrooms", "7 bathrooms", "8 beds"],
      property_token: "ChoQ9pi554nG8sXDARoNL2cvMTF2cHRkenp4NxAC",
      serpapi_property_details_link:
        "https://serpapi.com/search.json?adults=2&check_in_date=2024-03-27&check_out_date=2024-03-28&children=0&currency=USD&engine=google_hotels&gl=us&hl=en&property_token=ChoQ9pi554nG8sXDARoNL2cvMTF2cHRkenp4NxAC&q=Bali&vacation_rentals=true",
    },
  ];

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
        <LastestHotels lastelHotels={lastelHotels} />
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

function LastestHotels({ lastelHotels }) {
  console.log("HIHI", lastelHotels);
  return (
    <div className="mt-10 px-10 py-10 w-auto shadow-2xl rounded-3xl mx-10 lg:mx-14">
      <h2 className="notTailwind-title text-3xl font-medium">Lastest Hotels</h2>
      <ul className="flex justify-start overflow-scroll">
        {lastelHotels.map((hotel) => (
          <LastestHotelCard name={hotel.name} img={hotel.images[0].thumbnail} />
        ))}
      </ul>
    </div>
  );
}

function LastestHotelCard({ name, img }) {
  return (
    <li className="w-52 mx-2 mb-2">
      <img
        src={img}
        alt=""
        className="sm:h-40 notTailwind-hotel-image mt-10 min-h-52 min-w-52 bg-gray-500 rounded-3xl object-cover"
      />
      <div className="notTailwind-title mt-5 text-lg leading-tight">{name}</div>
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
