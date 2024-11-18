import { ActionType } from './action-type';
import { AppState } from './app-state';
import { Action } from './action';

export function reduce(oldAppState: AppState = new AppState(), action: Action): AppState {
    const newAppState = { ...oldAppState }
    switch (action.type) {
        case ActionType.GetAllServers:
            newAppState.servers = action.payload;
            break;

        case ActionType.GetFilteredServers:
            newAppState.servers = oldAppState.servers.filter(servers => servers.status === 1);
            break;

        case ActionType.UpdateServer:
            newAppState.servers = action.payload;
            break;

        case ActionType.GetSortedServers:
            newAppState.servers = oldAppState.servers.sort((a, b) => {
                if (a.datetime > b.datetime) {
                    return 1;
                } else if (a.datetime < b.datetime) {
                    return -1;
                } else {
                    return 0;
                }
            });
            break;

    }

    return newAppState;
}