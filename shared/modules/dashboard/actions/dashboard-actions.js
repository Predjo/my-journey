
import ActionTypes from '../constants/action-types';

export function toggleDashboardSidebar(show = true) {
  return {
    type : ActionTypes.TOGGLE_DASHBOARD_SIDEBAR, show
  };
}
