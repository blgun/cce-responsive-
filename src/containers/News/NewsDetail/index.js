import React, { Component } from "react";
import { connect } from "react-redux";
import NewsSlider from "../../../components/UI/Slider/NewsSlider/index";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import { TwitterTimelineEmbed } from "react-twitter-embed";

class NewsDetail extends Component {
  render() {
    return (
      <div style={{ width: "1200px", margin: "0 auto" }}>
        <NewsSlider />
        <div style={{ display: "flex", padding: "15px 0" }}>
          <div style={{ margin: "0 15px", width: "70%" }}>
            <img style={{ width: "100%", margin: "0"}}></img>
            <h1>
              Д.Нямхүү: Нийт 330 хүний сорьцод шинжилгээ хийхэд коронавирус
              илрээгүй
            </h1>
            <p style={{textAlign: "left"}}>
              ХӨСҮТ-ийн Тандалт, судалгааны албаны дарга А.Амбасэлмаа: Өнөөдрийн
              байдлаар ажиглалт тусгаарлалтын байранд шинээр 24 хүн орж, нэг хүн
              гарсан. Одоо 2784 хүн тусгаарлалтад байна. Үүнд 1-5 насны 95
              хүүхэд, жирэмсэн эх 108, архаг хууч өвчтэй 327 хүн байгаа юм. Үүнд
              нийт 41 их эмч, 71 резидент эмч ажиллаж, эмчилгээ үйлчилгээ үзүүлж
              байгаа бол Цэргийн төв эмнэлэгт 52 хүн байгаагаас эрчимт
              эмчилгээний тасагт дөрвөн хүн байна. ХӨСҮТ-ийн захирал Д.Нямхүү:
              Өнгөрсөн 24 цагийн хугацаанд 330 хүний сорьцод коронавирус
              илрүүлэх шинжилгээ хийхэд бүгдэд нь илрээгүй. Энэ 330 хүний задалж
              хэлбэл, -Долдугаар сарын 4-нд Токио-Улаанбаатар онгоцоор ирсэн 253
              хүний давтан шинжилгээ -ХӨСҮТ-д сэжигтэй хэмээн тусгаарлагдсан 7
              хүний давтан шинжилгээ -Дорноговь аймгийн Хангимандалын боомтоор
              орж ирсэн ачаа тээврийн 24 жолоочийн шинжилгээ -Алтанбулагийн
              боомтоор орж ирсэн ачаа тээврийн 18 жолоочийн шинжилгээ
              -Дархан-Уул аймагт тусгаарлагдсан 4 хүний шинжилгээ -Эдгэрч
              дараагийн сувилалд шилжсэн 24 хүний шинжилгээ орж байна. Ингээд
              манай улсад албан ёсоор батлагдсан 287 тохиолдол байгаагаас 213 нь
              эдгэрсэн. Одоо ХӨСҮТ-д 74 хүн эмчлэгдэж байна. Үүнээс 64 нь
              хөнгөн, 10 хүн хүндэвтэр байна. Мөн эмчилгээнд нэг жирэмсэн эх
              байгаа юм. ХӨСҮТ-д ажиглалт, тандалт, эмчилгээ гээд нийт 116 хүн
              байна. Бид чартераар ирэх хүмүүсийг хүлээж авах бэлтгэл ажлаа
              бүрэн ханган хүлээж байна.
            </p>
          </div>
          <div style={{ width: "30%" }}>
            <iframe
              src={
                "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcce.mongolia%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              }
              width="300px"
              height="500px"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="cce_mongolia"
              options={{ height: 350, width: 300 }}
            />
            {/* <FacebookShareButton
              url={"https://www.facebook.com/cce.mongolia/"}
              quote={"bla2"}
            >
              <FacebookIcon size={"2.5rem"} />
            </FacebookShareButton> */}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsDetail;
