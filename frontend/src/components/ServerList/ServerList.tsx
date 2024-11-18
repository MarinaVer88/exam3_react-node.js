import axios from "axios";
import { ServerModel } from "../../models/ServerModel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../../redux/action-type";
import { AppState } from "../../redux/app-state";
import ServerCard from "../ServerCard/ServerCard";
import './ServerList.css'


export default function ServerList() {

    const dispatch = useDispatch();
    const serversArray = useSelector((state: AppState) => state.servers);

    useEffect(() => {
        axios.get<ServerModel[]>("http://localhost:3001/servers").then((response) => {
            let serversArray = response.data;
            dispatch({ type: ActionType.GetAllServers, payload: serversArray });
        })
            .catch((error) => {
                console.error(error);
                alert("Failed to show");
            });
    }, [dispatch]);


    return (
        <div className="main-list">
            <div className='filters'>
                <label>Sort by datetime:</label>
                <input type='checkbox' id='sorted-servers' name='sorted-servers'
                        onChange={(event) => {
                            if (event.target.checked === true) {
                                dispatch({ type: ActionType.GetSortedServers, payload: serversArray} );
                            } else {
                                dispatch({ type: ActionType.GetAllServers, payload: serversArray} );
                            }
                    }}/>

                <label>Filter active servers:</label>
                <input type='checkbox' id='active-servers' name='active-servers'
                        onChange={(event) => {
                            if (event.target.checked === true) {
                                dispatch({ type: ActionType.GetFilteredServers, payload: serversArray} );
                            } else {
                                dispatch({ type: ActionType.GetAllServers, payload: serversArray} );
                            }
                        }}
                />
            </div>

            <div className="server-list">
                {serversArray.map((server: ServerModel, index: number) => (
                    <ServerCard
                        key={index}
                        {...server}
                    />
                ))}
            </div>
        </div>
    );
}