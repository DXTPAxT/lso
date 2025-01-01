import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const nhapdontext = document.querySelector(".nhapdontext");
    const tinhtong = document.querySelector(".tinhtong");
    const tongdon = document.querySelector(".tongdon");

    function da(dai, luotdanhArr, sodai) {
      var hesodanh = 0;
      var hesoma = 0;
      dai == "hn" ? (hesoma = 54) : (hesoma = 36);
      if (luotdanhArr[0].length == 4) {
        hesodanh = luotdanhArr[1].replace(",", ".");
      } else if (luotdanhArr[0].length == 6) {
        hesodanh = luotdanhArr[1].replace(",", ".") * 3;
      } else if (luotdanhArr[0].length == 8) {
        hesodanh = luotdanhArr[1].replace(",", ".") * 6;
      } else if (luotdanhArr[0].length == 10) {
        hesodanh = luotdanhArr[1].replace(",", ".") * 10;
      }
      return sodai * hesoma * hesodanh;
    }

    function dax(dai, luotdanhArr, sodai) {
      var hesodanh = 0;
      var hesoma = 0;
      dai == "hn" ? (hesoma = 67.5) : (hesoma = 45);
      if (luotdanhArr[0].length == 4) {
        hesodanh = luotdanhArr[1].replace(",", ".");
      } else if (luotdanhArr[0].length == 6) {
        hesodanh = luotdanhArr[1].replace(",", ".") * 3;
      } else if (luotdanhArr[0].length == 8) {
        hesodanh = luotdanhArr[1].replace(",", ".") * 6;
      } else if (luotdanhArr[0].length == 10) {
        hesodanh = luotdanhArr[1].replace(",", ".") * 10;
      }
      return sodai * hesoma * hesodanh;
    }

    function bao(luotdanhArr, dai, sodai) {
      var hesodanh = luotdanhArr[1];
      var hesoma = 0;
      var madanh = luotdanhArr[0].split(".");
      var tongtien = 0;
      for (var i = 0; i < madanh.length; i++) {
        var sokitu = madanh[i].length;
        if (sokitu == 2) {
          dai == "hn" ? (hesoma = 27) : (hesoma = 18);
        } else if (sokitu == 3) {
          dai == "hn" ? (hesoma = 23) : (hesoma = 17);
        } else if (sokitu == 4) {
          dai == "hn" ? (hesoma = 20) : (hesoma = 16);
        }
        tongtien += hesoma;
      }
      return sodai * tongtien * hesodanh.replace(",", ".");
    }

    function checkTwoPairs(str) {
      // Tạo một Map để đếm tần suất xuất hiện của từng chữ số
      let countMap = new Map();

      // Duyệt qua từng chữ số trong chuỗi và đếm tần suất
      for (let char of str) {
        countMap.set(char, (countMap.get(char) || 0) + 1);
      }

      // Kiểm tra xem Map có đúng 2 giá trị với tần suất là 2
      let counts = Array.from(countMap.values());
      return counts.length === 2 && counts.every((count) => count === 2);
    }

    function baodao(luotdanhArr, dai, sodai) {
      var hesodanh = luotdanhArr[1];
      var hesoma = 0;
      var madanh = luotdanhArr[0].split(".");
      var tongtien = 0;
      console.log(tongtien);
      for (var i = 0; i < madanh.length; i++) {
        var sokitu = madanh[i].length;
        if (sokitu == 3) {
          if (new Set(madanh[i]).size == 3) {
            dai == "hn" ? (hesoma = 23 * 6) : (hesoma = 17 * 6);
          } else {
            dai == "hn" ? (hesoma = 23 * 3) : (hesoma = 17 * 3);
          }
        } else if (sokitu == 4) {
          if (new Set(madanh[i]).size == 4) {
            dai == "hn" ? (hesoma = 20 * 24) : (hesoma = 16 * 24);
          } else if (new Set(madanh[i]).size == 3) {
            dai == "hn" ? (hesoma = 20 * 12) : (hesoma = 16 * 12);
          } else if (checkTwoPairs(madanh[i])) {
            dai == "hn" ? (hesoma = 20 * 6) : (hesoma = 16 * 6);
          } else {
            dai == "hn" ? (hesoma = 20 * 4) : (hesoma = 16 * 4);
          }
        }
        tongtien += hesoma;
      }
      return sodai * tongtien * hesodanh.replace(",", ".");
    }

    function xc(luotdanhArr, dai, sodai) {
      var hesodanh = luotdanhArr[1];
      var hesoma = 0;
      var madanh = luotdanhArr[0].split(".");
      var somadanh = madanh.length;
      var tongtien = 0;
      dai == "hn" ? (hesoma = 4) : (hesoma = 2);
      return sodai * somadanh * hesoma * hesodanh.replace(",", ".");
    }

    function xcdao(luotdanhArr, dai, sodai) {
      var hesodanh = luotdanhArr[1];
      var hesoma = 0;
      var madanh = luotdanhArr[0].split(".");
      var tongtien = 0;
      for (var i = 0; i < madanh.length; i++) {
        if (new Set(madanh[i]).size == 3) {
          dai == "hn" ? (hesoma = 4 * 6) : (hesoma = 2 * 6);
        } else {
          dai == "hn" ? (hesoma = 4 * 3) : (hesoma = 2 * 3);
        }
        tongtien += hesoma;
      }
      console.log(tongtien);
      return sodai * tongtien * hesodanh.replace(",", ".");
    }

    function dd(luotdanhArr, dai, sodai) {
      var hesodanh = luotdanhArr[1];
      var hesoma = 0;
      var madanh = luotdanhArr[0].split(".");
      var tongtien = 0;
      for (var i = 0; i < madanh.length; i++) {
        dai == "hn" ? (hesoma = 5) : (hesoma = 2);
        tongtien += hesoma;
      }
      console.log(tongtien);
      return sodai * tongtien * hesodanh.replace(",", ".");
    }

    function dau(luotdanhArr, dai, sodai) {
      var hesodanh = luotdanhArr[1];
      var hesoma = 0;
      var madanh = luotdanhArr[0].split(".");
      var tongtien = 0;
      for (var i = 0; i < madanh.length; i++) {
        dai == "hn" ? (hesoma = 4) : (hesoma = 1);
        tongtien += hesoma;
      }
      console.log(tongtien);
      return sodai * tongtien * hesodanh.replace(",", ".");
    }

    function duoi(luotdanhArr, dai, sodai) {
      var hesodanh = luotdanhArr[1];
      var hesoma = 0;
      var madanh = luotdanhArr[0].split(".");
      var tongtien = 0;
      for (var i = 0; i < madanh.length; i++) {
        dai == "hn" ? (hesoma = 1) : (hesoma = 1);
        tongtien += hesoma;
      }
      console.log(tongtien);
      return sodai * tongtien * hesodanh.replace(",", ".");
    }

    tinhtong.addEventListener("click", function () {
      const lines = nhapdontext.value.split("\n");
      const madais = [
        "Tpho",
        "Dthap",
        "Cmau",
        "Btre",
        "Vtau",
        "Blieu",
        "Dnai",
        "Ctho",
        "Strang",
        "Tninh",
        "Agiang",
        "Bthuan",
        "Vlong",
        "Bduong",
        "Tvinh",
        "Lan",
        "Bphuoc",
        "Hgiang",
        "Tgiang",
        "Kgiang",
        "Dlat",
        "Pyen",
        "Hue",
        "Dlak",
        "Qnam",
        "Dnang",
        "Khoa",
        "Bdinh",
        "Qtri",
        "Qbinh",
        "Glai",
        "Nthuan",
        "Qngai",
        "Dnong",
        "Ktum",
      ];
      var sodai = 0;
      var dai;
      var luotdanh;
      var tongtien = 0;

      for (var i = 0; i < lines.length; i++) {
        // gắn đài
        if (i == 0 || (sodai == 0 && lines[i] != "")) {
          dai = lines[i];
          if (!isNaN(dai[0])) {
            sodai = dai[0];
          } else if (dai.toLowerCase() == "hn") {
            dai = "hn";
            sodai = 1;
          } else if (dai.toLowerCase() != "hn") {
            dai = dai.toLowerCase();
            madais.forEach((madai) => {
              if (dai.includes(madai.toLowerCase())) {
                sodai++;
                dai = dai.replace(madai.toLowerCase(), "");
              }
            });
            madais.forEach((madai) => {
              if (dai.includes(madai.toLowerCase())) {
                sodai++;
                dai = dai.replace(madai.toLowerCase(), "");
              }
            });
            dai = lines[i].toLowerCase();
          }
          // hàng trống
        } else if (sodai != 0 && lines[i] == "") {
          sodai = 0;
          // cộng từng lượt đánhđánh
        } else if (sodai != 0 && lines[i] != "") {
          luotdanh = lines[i];
          // đá thườngthường
          if (
            luotdanh.includes("da") &&
            !luotdanh.includes("x") &&
            !luotdanh.includes("dao") && !luotdanh.includes("dau")
          ) {
            var luotdanhArr = luotdanh.split("da");
            tongtien += da(dai, luotdanhArr, sodai);
            // đá xx
          } else if (
            luotdanh.includes("da") &&
            luotdanh.includes("x") &&
            !luotdanh.includes("dao") && !luotdanh.includes("dau")
          ) {
            var luotdanhArr = luotdanh.split("da");
            luotdanhArr[1] = luotdanhArr[1].replace("x", "");
            tongtien += dax(dai, luotdanhArr, sodai);
            // bao
          } else if (luotdanh.includes("b")) {
            // bao thường
            if (!luotdanh.includes("dao")) {
              var luotdanhArr = luotdanh.split("b");
              tongtien += bao(luotdanhArr, dai, sodai);
              // bao đảo
            } else {
              var luotdanhArr = luotdanh.split("bdao");
              tongtien += baodao(luotdanhArr, dai, sodai);
            }
            // xỉu
          } else if (luotdanh.includes("x")) {
            // xỉu thường
            if (!luotdanh.includes("dao")) {
              var luotdanhArr = luotdanh.split("x");
              tongtien += xc(luotdanhArr, dai, sodai);
              // xỉu đảo
            } else {
              var luotdanhArr = luotdanh.split("xdao");
              tongtien += xcdao(luotdanhArr, dai, sodai);
            }
            // dd
          } else if (luotdanh.includes("dd")) {
            var luotdanhArr = luotdanh.split("dd");
            tongtien += dd(luotdanhArr, dai, sodai);
            // đầu
          } else if (luotdanh.includes("dau")) {
            var luotdanhArr = luotdanh.split("dau");
            console.log("dau")
            tongtien += dau(luotdanhArr, dai, sodai);
            // đuôi
          } else if (luotdanh.includes("duoi") || luotdanh.includes("dui")) {
            if (luotdanh.includes("duoi")) {
              var luotdanhArr = luotdanh.split("duoi");
              tongtien += duoi(luotdanhArr, dai, sodai);
            } else {
              var luotdanhArr = luotdanh.split("dui");
              tongtien += duoi(luotdanhArr, dai, sodai);
            }
          }
        }
      }
      tongdon.innerHTML = tongtien;
    });
  }, []);

  return (
    <div className="App">
      <div className="nhapdonbox">
        <div className="nhapdonboxheader">
          <div className="nhapdon">Nhập đơn </div>
          <div className="tinhtong">Tính tổng</div>
        </div>
        <textarea
          className="nhapdontext"
          placeholder="Nhập đơn ở đây..."
        ></textarea>
      </div>
      <div className="tongbox">
        <div className="tong">Tổng</div>
        <div className="tongdon">0</div>
      </div>
      <div className="ketquasosobox">
        <div className="ketquasosoheader">
          <div className="ketquasoso">Nhập kết quả xổ số</div>
          <div className="checkkq">Check</div>
        </div>
        <textarea
          className="textarea1"
          rows="4"
          cols="50"
          placeholder="Nhập kết quả xổ số..."
        ></textarea>
      </div>
      <div className="trungsobox">
        <div className="trungso">Trúng số</div>
        <div className="danhsachtrungso"></div>
      </div>
    </div>
  );
}

export default App;
