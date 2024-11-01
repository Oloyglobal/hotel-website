/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        cut: " #152C5B",
        cutt: " #3252DF",
        cut2: "#B0B0B0",
        cut3: "#EAF1FF;",
        cut4: "#757575",
        cut5: "#464A53",
        cut6: "#0A0A0A",

      },
      backgroundImage: {
        img1: "url('https://res.cloudinary.com/dicxuebms/image/upload/v1729875672/pic_it7ovx.png')", 
        img2: "url('https://res.cloudinary.com/dicxuebms/image/upload/v1729875999/pic_1_otjsxa.png')", 
        img3: "url('https://res.cloudinary.com/dicxuebms/image/upload/v1729875996/pic_3_jye6iy.png')", 
        img4: "url('https://res.cloudinary.com/dicxuebms/image/upload/v1729876129/pic_2_gfjxmy.png')", 
        img5: "url('https://res.cloudinary.com/dicxuebms/image/upload/v1729876076/pic_4_y1kzoc.png')", 
        img6: "url('https://res.cloudinary.com/dicxuebms/image/upload/v1729884381/Rectangle_3_2_amti6r.png')", 
        img7: "url('https://res.cloudinary.com/dicxuebms/image/upload/v1729884345/Rectangle_3_4_f3mviv.png)", 

        img14: "url('https://res.cloudinary.com/dicxuebms/image/upload/v1729884345/Rectangle_3_4_f3mviv.png')", 
        img8:  "url('https://res.cloudinary.com/dlb3doese/image/upload/v1730116905/image_5_1_gztpdh.png')",
        blank: "url('https://res.cloudinary.com/dlb3doese/image/upload/v1730118209/Rectangle_1_c8iuf6.png')"
      }
    },
  },
  plugins: [],


}

