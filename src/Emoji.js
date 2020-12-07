import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import $ from "jquery";
import "./emoji.css";
function Emoji() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  $(".js-choice").on("click", function () {
    var type = $(this).data("type");
    var multiple = $(this).data("multiple");
    var name = $(this).data("name");
    console.log("hehe");
    if (multiple === "no") {
      if (type === "eyebrows" || type === "eyes") {
        var typeSingle = type.slice(0, -1);
        var parentDiv = $("div." + type);
        parentDiv.empty();
        var newDiv =
          '<div className="' +
          typeSingle +
          " left " +
          name +
          '"></div><div className="' +
          typeSingle +
          " right " +
          name +
          '"></div>';
        $(parentDiv).append(newDiv);
        $('.emoji-choices div[data-type="' + type + '"]').removeClassName(
          "selected"
        );
        $(this).addClassName("selected");
      } else if (type === "item") {
        $(".item").text("");
        $(".emoji-face")
          .find("." + type)
          .attr("className", type + " " + name);
        $('.emoji-choices div[data-type="item"]').removeClassName("selected");
        $(this).addClassName("selected");
      } else if (type === "skin") {
        $(".emoji-face").attr("className", "emoji-face " + " " + name);
        $('.emoji-choices div[data-type="' + type + '"]').removeClassName(
          "selected"
        );
        $(this).addClassName("selected");
      } else {
        $(".emoji-face")
          .find("." + type)
          .attr("className", type + " " + name);
        $('.emoji-choices div[data-type="' + type + '"]').removeClassName(
          "selected"
        );
        $(this).addClassName("selected");
      }
    } else {
      $(this).toggleClassName("selected");
      var elementToCheck = $("div." + type + "." + name);
      if (elementToCheck.length > 0) {
        elementToCheck.remove();
      } else {
        var newDiv = '<div className="' + type + " " + name + '"></div>';
        $(".emoji-face").append(newDiv);
      }
    }
  });

  $(".js-custom-item").on("keyup paste", function () {
    var customItem = $(this).val();
    $('.emoji-choices div[data-type="item"]').removeClassName("selected");

    $(".item").remove();
    var newDiv = '<div className="item custom">' + customItem + "</div>";
    $(".emoji-face").append(newDiv);
  });

  return (
    <>
      <div onClick={handleShow}>🎁</div>{" "}
      <Modal className="sizer" show={show} onHide={handleClose}>
        <Modal.Body>
          {" "}
          <div className="main-content">
            <div className="emoji-name">
              <div>Emoji&ensp;Factory</div>
            </div>
            <div className="emoji-preview">
              <div className="emoji__wrapper">
                <div className="emoji-face">
                  <div className="hat no-hat"></div>
                  <div className="eyebrows">
                    <div className="eyebrow left no-eyebrows"></div>
                    <div className="eyebrow right no-eyebrows"></div>
                  </div>
                  <div className="eyes">
                    <div className="eye left default"></div>
                    <div className="eye right default"></div>
                  </div>
                  <div className="mouth default"></div>
                  <div className="face-extras sweat"></div>
                  <div className="item default"></div>
                </div>
              </div>
            </div>
            <div className="emoji-choices">
              <div className="emoji-choices__header">skin color</div>
              <div className="emoji-choices__group emoji-choices__group--skin">
                <div
                  className="emoji-choice__skin selected js-choice selected"
                  data-type="skin"
                  data-multiple="no"
                  data-name="skin-1"
                ></div>
                <div
                  className="emoji-choice__skin js-choice"
                  data-type="skin"
                  data-multiple="no"
                  data-name="skin-2"
                ></div>
                <div
                  className="emoji-choice__skin js-choice"
                  data-type="skin"
                  data-multiple="no"
                  data-name="skin-3"
                ></div>
                <div
                  className="emoji-choice__skin js-choice"
                  data-type="skin"
                  data-multiple="no"
                  data-name="skin-4"
                ></div>
                <div
                  className="emoji-choice__skin js-choice"
                  data-type="skin"
                  data-multiple="no"
                  data-name="skin-5"
                ></div>
                <div
                  className="emoji-choice__skin js-choice"
                  data-type="skin"
                  data-multiple="no"
                  data-name="skin-6"
                ></div>
              </div>
              <div className="emoji-choices__header">eyes</div>
              <div className="emoji-choices__group">
                <div
                  className="emoji-choice__item js-choice selected"
                  data-type="eyes"
                  data-multiple="no"
                  data-name="default"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="eyes"
                  data-multiple="no"
                  data-name="startled"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="eyes"
                  data-multiple="no"
                  data-name="heart"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="eyes"
                  data-multiple="no"
                  data-name="star"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="eyes"
                  data-multiple="no"
                  data-name="fire"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="eyes"
                  data-multiple="no"
                  data-name="squeeze"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="eyes"
                  data-multiple="no"
                  data-name="closed-up"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="eyes"
                  data-multiple="no"
                  data-name="closed-down"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="eyes"
                  data-multiple="no"
                  data-name="lined"
                ></div>
              </div>
              <div className="emoji-choices__header">mouth</div>
              <div className="emoji-choices__group">
                <div
                  className="emoji-choice__item js-choice"
                  data-type="mouth"
                  data-multiple="no"
                  data-name="no-mouth"
                ></div>
                <div
                  className="emoji-choice__item js-choice selected"
                  data-type="mouth"
                  data-multiple="no"
                  data-name="default"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="mouth"
                  data-multiple="no"
                  data-name="upside"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="mouth"
                  data-multiple="no"
                  data-name="open"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="mouth"
                  data-multiple="no"
                  data-name="tongue"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="mouth"
                  data-multiple="no"
                  data-name="lined"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="mouth"
                  data-multiple="no"
                  data-name="frown"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="mouth"
                  data-multiple="no"
                  data-name="smile"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="mouth"
                  data-multiple="no"
                  data-name="curse"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="mouth"
                  data-multiple="no"
                  data-name="grimace"
                ></div>
              </div>
              <div className="emoji-choices__header">eyebrows</div>
              <div className="emoji-choices__group">
                <div
                  className="emoji-choice__item js-choice selected"
                  data-type="eyebrows"
                  data-multiple="no"
                  data-name="no-eyebrows"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="eyebrows"
                  data-multiple="no"
                  data-name="downwards"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="eyebrows"
                  data-multiple="no"
                  data-name="furrow"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="eyebrows"
                  data-multiple="no"
                  data-name="furrow-far"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="eyebrows"
                  data-multiple="no"
                  data-name="up-far"
                ></div>
              </div>
              <div className="emoji-choices__header">hats</div>
              <div className="emoji-choices__group">
                <div
                  className="emoji-choice__item js-choice selected"
                  data-type="hat"
                  data-multiple="no"
                  data-name="no-hat"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="hat"
                  data-multiple="no"
                  data-name="round-hat"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="hat"
                  data-multiple="no"
                  data-name="wizard-hat"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="hat"
                  data-multiple="no"
                  data-name="sorting-hat"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="hat"
                  data-multiple="no"
                  data-name="top-hat"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="hat"
                  data-multiple="no"
                  data-name="traffic-cone"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="hat"
                  data-multiple="no"
                  data-name="cactus"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="hat"
                  data-multiple="no"
                  data-name="mickey"
                ></div>
              </div>
              <div className="emoji-choices__header">
                extras <small>(Multiples allowed)</small>
              </div>
              <div className="emoji-choices__group">
                <div
                  className="emoji-choice__item js-choice selected"
                  data-type="face-extras"
                  data-multiple="yes"
                  data-name="sweat"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="face-extras"
                  data-multiple="yes"
                  data-name="tears"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="face-extras"
                  data-multiple="yes"
                  data-name="geek-glasses"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="face-extras"
                  data-multiple="yes"
                  data-name="sunglasses"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="face-extras"
                  data-multiple="yes"
                  data-name="crescent-glasses"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="face-extras"
                  data-multiple="yes"
                  data-name="blush"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="face-extras"
                  data-multiple="yes"
                  data-name="bandage"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="face-extras"
                  data-multiple="yes"
                  data-name="scarf-gryf"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="face-extras"
                  data-multiple="yes"
                  data-name="scarf-huff"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="face-extras"
                  data-multiple="yes"
                  data-name="scarf-rave"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="face-extras"
                  data-multiple="yes"
                  data-name="scarf-slyt"
                ></div>
              </div>
              <div className="emoji-choices__header">item</div>
              <div className="emoji-choices__group">
                <div
                  className="emoji-choice__item js-choice selected"
                  data-type="item"
                  data-multiple="no"
                  data-name="default"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="item"
                  data-multiple="no"
                  data-name="shield"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="item"
                  data-multiple="no"
                  data-name="dango"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="item"
                  data-multiple="no"
                  data-name="wand"
                ></div>
                <div
                  className="emoji-choice__item js-choice"
                  data-type="item"
                  data-multiple="no"
                  data-name="coffee"
                ></div>
                <div
                  className="emoji-choice__item-custom"
                  data-type="item"
                  data-multiple="no"
                  data-name="custom"
                >
                  <span>Type/Paste any emoji here for a custom item: </span>
                  <input className="js-custom-item" maxLength="2" />
                </div>
              </div>
            </div>
          </div>
          <aside className="context">
            <div className="explanation">
              Interested in another factory? <br />
              Check out the{" "}
              <a
                href="https://codepen.io/oliviale/details/yvVVjG"
                target="_blank"
              >
                medal factory here.
              </a>
            </div>
          </aside>
          <footer>
            <a href="https://twitter.com/meowlivia_" target="_blank">
              <i className="icon-social-twitter icons"></i>
            </a>
            <a href="https://github.com/oliviale" target="_blank">
              <i className="icon-social-github icons"></i>
            </a>
            <a href="https://dribbble.com/oliviale" target="_blank">
              <i className="icon-social-dribbble icons"></i>
            </a>
          </footer>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <button variant="primary" onClick={handleClose}>
              Submit Mascot
            </button>
          </div>
        </Modal.Footer>
      </Modal>{" "}
    </>
  );
}

export default Emoji;
