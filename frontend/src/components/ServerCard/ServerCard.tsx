import axios from 'axios';
import React from 'react'
import { ServerModel } from '../../models/ServerModel';
import { useDispatch } from 'react-redux';
import { ActionType } from '../../redux/action-type';
import './ServerCard.css'



export default function ServerCard(props: ServerModel) {

    const dispatch = useDispatch();
    const updateServer = async (updatedServer: ServerModel) => {
        try {
            await axios.put(
                'http://localhost:3001/servers/' + updatedServer.id, updatedServer
            );
        } catch (error) {
            return new Error(error);
        }
    };

    return (
        <div className="server-card">
            <h2>{props.name}</h2>
            <h3>{props.company_name}</h3>
            <h4>{props.ip}</h4>
            <h4>{props.datetime}</h4>

            <label className='switch'>
            <input type='checkbox' id='status' name='status'
                    checked={props.status === 1 ? true : false}
                    onChange={async (event) => {
                        let updatedServer = { ...props };
                        if (event.target.checked === false) {
                            updatedServer.status = 0;
                            await updateServer(updatedServer);
                        } else {
                            updatedServer.status = 1;
                            await updateServer(updatedServer);
                        }
                        dispatch({ type: ActionType.GetAllServers} );
                    }}
            />
            <span className='slider round'></span>
             </label>
        </div>
    )
}
