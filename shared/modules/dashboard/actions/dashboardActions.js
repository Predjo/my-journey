
import ActionTypes from '../constants/actionTypes';

export function toggleDashboardSidebar(show = true) {
  return {
    type : ActionTypes.TOGGLE_DASHBOARD_SIDEBAR, show
  };
}
