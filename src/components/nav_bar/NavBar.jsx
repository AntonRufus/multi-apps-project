import React from "react";
import {NavCreator} from "../creators/Creator";
import css from "../creators/Creator.module.css";

const NavBar = () =>
    <div>
        {/*<div className={css.arrows}>
              <button className={css.arrow_up}>⬆</button>
              <button className={css.arrow_down}>⬇</button>
        </div>*/}
        <NavCreator     to={'/home'                     }       title={'Home page'}        />
        <NavCreator     to={'/pomodoro_timer'           }       title={'Pomodoro Timer'}   />
        <NavCreator     to={'/just_timer'               }       title={'Just Timer'}       />
        <NavCreator     to={'/markdown_editor'          }       title={'Markdown Editor'}  />
        <NavCreator     to={'/browser_tabs'             }       title={'Browser Tabs'}     />
        <NavCreator     to={'/paper_rock_scissors'      }       title={'RPS  ✊ 🤚 🖖'}     />
        <NavCreator     to={'/infinite_image_gallery'   }       title={'Infinite Gallery'} />
        <NavCreator     to={'/trivia'                   }       title={'Trivia'}           />
        <NavCreator     to={'/authentication/home'      }       title={'Authentication'}   />
        <hr/>
        <div className={css.moving_boxes_link}>
                <a target='_blank' href="https://antonrufus.github.io/moving-boxes/">Moving boxes</a>
        </div>
    </div>

export default NavBar;
