import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const substrings = [
      "bdao",
      "xdao",
      "b",
      "dau",
      "duoi",
      "da",
      "dd",
      "x",
      "dui",
    ];
    const nhapdontext = document.querySelector(".nhapdontext");
    const tinhtong = document.querySelector(".tinhtong");
    const tongdon = document.querySelector(".tongdon");
    const ketquasosoList = document.querySelectorAll(".textarea1");
    const checkList = document.querySelectorAll(".checkkq");
    const danhsachtrungsoList = document.querySelectorAll(".danhsachtrungso");

    function da(dai, luotdanhArr, sodai) {
      var hesodanh = luotdanhArr[1].replace(",", ".");
      var hesoma = 0;
      var madanh = luotdanhArr[0].split(".");
      var tongtien = 0;
      for (var i = 0; i < madanh.length; i++) {
        if (madanh[i].length == 4) {
          dai == "hn" ? (hesoma = 54) : (hesoma = 36);
        } else if (madanh[i].length == 6) {
          dai == "hn" ? (hesoma = 54 * 3) : (hesoma = 36 * 3);
        } else if (madanh[i].length == 8) {
          dai == "hn" ? (hesoma = 54 * 6) : (hesoma = 36 * 6);
        } else if (madanh[i].length == 10) {
          dai == "hn" ? (hesoma = 54 * 10) : (hesoma = 36 * 10);
        }
        tongtien += hesoma;
      }
      return sodai * tongtien * hesodanh;
    }

    function dax(dai, luotdanhArr, sodai) {
      var hesodanh = luotdanhArr[1].replace(",", ".");
      var hesoma = 0;
      var madanh = luotdanhArr[0].split(".");
      var tongtien = 0;
      for (var i = 0; i < madanh.length; i++) {
        if (madanh[i].length == 4) {
          dai == "hn" ? (hesoma = 67.5) : (hesoma = 45);
        } else if (madanh[i].length == 6) {
          dai == "hn" ? (hesoma = 67.5 * 3) : (hesoma = 45 * 3);
        } else if (madanh[i].length == 8) {
          dai == "hn" ? (hesoma = 67.5 * 6) : (hesoma = 45 * 6);
        } else if (madanh[i].length == 10) {
          dai == "hn" ? (hesoma = 67.5 * 10) : (hesoma = 45 * 10);
        }
        tongtien += hesoma;
      }
      return sodai * tongtien * hesodanh;
      // dai == "hn" ? (hesoma = 67.5) : (hesoma = 45);
      // if (luotdanhArr[0].length == 4) {
      //   hesodanh = luotdanhArr[1].replace(",", ".");
      // } else if (luotdanhArr[0].length == 6) {
      //   hesodanh = luotdanhArr[1].replace(",", ".") * 3;
      // } else if (luotdanhArr[0].length == 8) {
      //   hesodanh = luotdanhArr[1].replace(",", ".") * 6;
      // } else if (luotdanhArr[0].length == 10) {
      //   hesodanh = luotdanhArr[1].replace(",", ".") * 10;
      // }
      // return sodai * hesoma * hesodanh;
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
      return sodai * tongtien * hesodanh.replace(",", ".");
    }

    function tinhtongtien(dai, maDanh, cacKieuDanh, sodai) {
      var tongtien = 0;

      cacKieuDanh.forEach((kieudanh) => {
        var luotdanhArr = [maDanh, kieudanh.replace(/[a-zA-Z]/g, "")];
        // đá thường
        if (
          kieudanh.includes("da") &&
          !kieudanh.includes("x") &&
          !kieudanh.includes("dao") &&
          !kieudanh.includes("dau")
          // đá x
        ) {
          tongtien += da(dai, luotdanhArr, sodai);
        } else if (
          kieudanh.includes("da") &&
          kieudanh.includes("x") &&
          !kieudanh.includes("dao") &&
          !kieudanh.includes("dau")
        ) {
          tongtien += dax(dai, luotdanhArr, sodai);
          // baobao
        } else if (kieudanh.includes("b")) {
          // bao thường
          if (!kieudanh.includes("dao")) {
            tongtien += bao(luotdanhArr, dai, sodai);
            // bao đảo
          } else {
            tongtien += baodao(luotdanhArr, dai, sodai);
          }
          // xiu
        } else if (kieudanh.includes("x")) {
          // xỉu thường
          if (!kieudanh.includes("dao")) {
            tongtien += xc(luotdanhArr, dai, sodai);
            // xỉu đảo
          } else {
            tongtien += xcdao(luotdanhArr, dai, sodai);
          }
          // dd
        } else if (kieudanh.includes("dd")) {
          tongtien += dd(luotdanhArr, dai, sodai);
          // đầu
        } else if (kieudanh.includes("dau")) {
          tongtien += dau(luotdanhArr, dai, sodai);
          // đuôi
        } else if (kieudanh.includes("duoi") || kieudanh.includes("dui")) {
          tongtien += duoi(luotdanhArr, dai, sodai);
        }
      });

      return tongtien;
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
      var dai = "";
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
          // cộng từng lượt đánh
        } else if (sodai != 0 && lines[i] != "") {
          luotdanh = lines[i];
          var luotdanhArr = luotdanh.split(
            new RegExp(substrings.join("|"), "g")
          );
          var madanh = luotdanhArr[0];
          luotdanh = luotdanh.replace(madanh, "");
          var cacKieuDanh = [];
          while (luotdanh != "") {
            substrings.forEach((subString) => {
              var kieuDanh = "";
              if (luotdanh.includes(subString)) {
                kieuDanh += subString;
                var index = kieuDanh.indexOf(subString);
                luotdanh = luotdanh.replace(subString, "");
                if (
                  subString != "da" ||
                  (subString == "da" && !luotdanh.includes("x"))
                ) {
                  while (
                    !/^[a-zA-Z]$/.test(luotdanh[index]) &&
                    luotdanh[index] != undefined
                  ) {
                    kieuDanh += luotdanh[index];
                    luotdanh =
                      luotdanh.slice(0, index) + luotdanh.slice(index + 1);
                  }
                } else if (subString == "da" && luotdanh.includes("x")) {
                  while (
                    luotdanh[index] != "x" &&
                    luotdanh[index] != undefined
                  ) {
                    kieuDanh += luotdanh[index];
                    luotdanh =
                      luotdanh.slice(0, index) + luotdanh.slice(index + 1);
                  }
                }
                cacKieuDanh.push(kieuDanh);
              }
            });
            console.log(luotdanh);
          }
          console.log(cacKieuDanh);
          console.log(dai);
          tongtien += tinhtongtien(dai, madanh, cacKieuDanh, sodai);
        }

        // else if (sodai != 0 && lines[i] != "") {
        //   luotdanh = lines[i];
        //   // đá thường
        //   if (
        //     luotdanh.includes("da") &&
        //     !luotdanh.includes("x") &&
        //     !luotdanh.includes("dao") &&
        //     !luotdanh.includes("dau")
        //   ) {
        //     var luotdanhArr = luotdanh.split("da");
        //     tongtien += da(dai, luotdanhArr, sodai);
        //     // đá x
        //   } else if (
        //     luotdanh.includes("da") &&
        //     luotdanh.includes("x") &&
        //     !luotdanh.includes("dao") &&
        //     !luotdanh.includes("dau")
        //   ) {
        //     var luotdanhArr = luotdanh.split("da");
        //     luotdanhArr[1] = luotdanhArr[1].replace("x", "");
        //     tongtien += dax(dai, luotdanhArr, sodai);
        //     // bao
        //   } else if (luotdanh.includes("b")) {
        //     // bao thường
        //     if (!luotdanh.includes("dao")) {
        //       var luotdanhArr = luotdanh.split("b");
        //       tongtien += bao(luotdanhArr, dai, sodai);
        //       // bao đảo
        //     } else {
        //       var luotdanhArr = luotdanh.split("bdao");
        //       tongtien += baodao(luotdanhArr, dai, sodai);
        //     }
        //     // xỉu
        //   } else if (luotdanh.includes("x")) {
        //     // xỉu thường
        //     if (!luotdanh.includes("dao")) {
        //       var luotdanhArr = luotdanh.split("x");
        //       tongtien += xc(luotdanhArr, dai, sodai);
        //       // xỉu đảo
        //     } else {
        //       var luotdanhArr = luotdanh.split("xdao");
        //       tongtien += xcdao(luotdanhArr, dai, sodai);
        //     }
        //     // dd
        //   } else if (luotdanh.includes("dd")) {
        //     var luotdanhArr = luotdanh.split("dd");
        //     tongtien += dd(luotdanhArr, dai, sodai);
        //     // đầu
        //   } else if (luotdanh.includes("dau")) {
        //     var luotdanhArr = luotdanh.split("dau");
        //     tongtien += dau(luotdanhArr, dai, sodai);
        //     // đuôi
        //   } else if (luotdanh.includes("duoi") || luotdanh.includes("dui")) {
        //     if (luotdanh.includes("duoi")) {
        //       var luotdanhArr = luotdanh.split("duoi");
        //       tongtien += duoi(luotdanhArr, dai, sodai);
        //     } else {
        //       var luotdanhArr = luotdanh.split("dui");
        //       tongtien += duoi(luotdanhArr, dai, sodai);
        //     }
        //   }
        // }
      }
      tongdon.innerHTML = tongtien;
    });

    checkList.forEach((check, index) => {
      check.addEventListener("click", function () {
        const ketQua = ketquasosoList[index].value;
        const ketQuaArr = ketQua.split("\n");
        const dai = ketQuaArr[0].toLowerCase();
        const donArr = nhapdontext.value.split("\n");
        danhsachtrungsoList[index].innerHTML = "";
        nhapdontext.innerHTML = "";
        let trungSoMap = [];
        let danhtrungsomap = [];

        for (var i = 0; i < donArr.length; i++) {
          if (donArr[i].toLowerCase().includes(dai)) {
            i++;
            while (donArr[i] != "" && i < donArr.length) {
              let maDanh = [];
              if (!donArr[i].includes("da")) {
                const donArrSplit = donArr[i].split(
                  new RegExp(substrings.join("|"), "g")
                );
                maDanh = donArrSplit[0].split(".");
              } else {
                const donArrSplit = donArr[i].split(
                  new RegExp(substrings.join("|"), "g")
                );
                for (let i = 0; i < donArrSplit[0].length; i += 2) {
                  maDanh.push(donArrSplit[0].slice(i, i + 2));
                }
              }

              for (var j = 0; j < maDanh.length; j++) {
                const sokitu = maDanh[j].length;
                for (var k = 0; k < ketQuaArr.length; k++) {
                  if (!isNaN(ketQuaArr[k]) && ketQuaArr[k].length >= sokitu) {
                    if (ketQuaArr[k].slice(-sokitu) == maDanh[j]) {
                      trungSoMap.push(ketQuaArr[k]);
                      danhtrungsomap.push(maDanh[j]);
                    }
                  }
                }
              }
              i++;
            }
          }
        }

        for (var i = 0; i < ketQuaArr.length; i++) {
          if (trungSoMap.includes(ketQuaArr[i])) {
            danhsachtrungsoList[
              index
            ].innerHTML += `<div class="red kqua">${ketQuaArr[i]}</div><span>\n</span>`;
          } else {
            danhsachtrungsoList[
              index
            ].innerHTML += `<div class="kqua">${ketQuaArr[i]}</div><span>\n</span>`;
          }
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="nhapdonGroup">
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
      </div>

      <div className="ketquasosoGroup">
        <div className="ketquasosobox">
          <div className="ketquasosoheader">
            <div className="ketquasoso">Nhập kết quả</div>
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

        <div className="ketquasosobox">
          <div className="ketquasosoheader">
            <div className="ketquasoso">Nhập kết quả</div>
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
        <div className="ketquasosobox">
          <div className="ketquasosoheader">
            <div className="ketquasoso">Nhập kết quả</div>
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

        <div className="ketquasosobox">
          <div className="ketquasosoheader">
            <div className="ketquasoso">Nhập kết quả</div>
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
    </div>
  );
}

export default App;
