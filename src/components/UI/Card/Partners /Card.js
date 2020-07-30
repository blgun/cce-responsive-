import React, { Component } from "react";
import Partners from "./CardUI";

import nvb from "../../../../assets/images/Partner/cce-logo_1.png";
import hugjil from "../../../../assets/images/Partner/hugjil.svg";

import neelttei from "../../../../assets/images/Partner/logo_osf.gif";
import civitas from "../../../../assets/images/Partner/civitas.jpg";
import bolowsrol from "../../../../assets/images/Partner/bolowsrolsoyol.png";
import ardchilal from "../../../../assets/images/Partner/unfpa_5.jpg";
import Polish from "../../../../assets/images/Partner/Polish.png";
import Americ from "../../../../assets/images/Partner/Americ.jpg";
import Baigal from "../../../../assets/images/Partner/baigal.jpg";
import Baruun from "../../../../assets/images/Partner/baruun.jpg";

class Card extends Component {
  state = {
    data: [
      {
        img1: nvb,
        text1: "Иргэний боловсролын төв",
      },
      {
        img2: hugjil,
        text2: "Нүб хөгжлийн хөтөлбөр",
      },
      {
        img3: neelttei,
        text3: "Нээлттэй эхийн форум",
      },
      {
        img4: civitas,
        text4: "Civictas International",
      },
      {
        img5: bolowsrol,
        text5: "Боловсрол соёл шинжлэх ухааны яам",
      },
      {
        img6: ardchilal,
        text6: "НҮБ-ын Хүн амын сан",
      },
      //{
      //img5:nvbhvnaml,
      //  text5: "Нүб-ын хүн амын сан",
      //},
      {
        img7: Polish,
        text7: "Ардчилалын төлөө боловсрол сан Польш ",
      },
      {
        img8: Americ,
        text8: "АНУ-ын Багш нарын холбоо АНУ",
      },
      {
        img9: Baigal,
        text9: "Тахо БАйгаль нуурын хүрээлэн АНУ",
      },
      {
        img10: Baruun,
        text10: "Баруун Өмнөд эргийн судалгааны төв,Шинэ Мексико Ану",
      },
    ],
  };
  render() {
    return (
      <div>
        <div className="PartHemjee">
          <div
            style={{
              display: "flex",
              width: "800px",
              margin: "auto",
              height: "200px",
            }}
          >
            <Partners
              imgsrc={this.state.data[0].img1}
              text={this.state.data[0].tex1}
            />
            <Partners
              imgsrc={this.state.data[1].img2}
              text={this.state.data[1].tex2}
            />
            <Partners
              imgsrc={this.state.data[2].img3}
              text={this.state.data[2].tex3}
            />
            <Partners
              imgsrc={this.state.data[3].img4}
              text={this.state.data[3].tex4}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "800px",
              margin: "auto",
              height: "200px",
            }}
          >
            <Partners
              imgsrc={this.state.data[4].img5}
              text={this.state.data[4].tex5}
            />
            <Partners
              imgsrc={this.state.data[5].img6}
              text={this.state.data[5].tex6}
            />
            <Partners
              imgsrc={this.state.data[6].img7}
              text={this.state.data[6].tex7}
            />
            <Partners
              imgsrc={this.state.data[7].img8}
              text={this.state.data[7].tex8}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "800px",
              margin: "auto",
              height: "200px",
            }}
          >
            <Partners
              imgsrc={this.state.data[8].img9}
              text={this.state.data[8].tex8}
            />
            <Partners
              imgsrc={this.state.data[9].img10}
              text={this.state.data[9].tex9}
            />
            <Partners />
            <Partners />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
