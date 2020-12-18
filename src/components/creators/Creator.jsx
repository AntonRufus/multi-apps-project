import {NavLink, Route} from "react-router-dom";
import React from "react";

export const NavCreator   = props => <div> <hr/> <NavLink to= { props.to } > { props.title } </NavLink> </div>

export const RouteCreator = props => <Route exact path= { props.path } render= { props.render } />
