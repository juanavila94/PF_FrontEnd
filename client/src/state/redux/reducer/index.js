import {
  ADD_COMPANY,
  GET_COMPANIES,
  RESET_CREATE,
  CREATE_EMPLOYEE,
  GET_EMPLOYEES,
  UPDATE_EMPLOYEE,
  GET_EMPLOYEE_DETAIL,
  DELETE_EMPLOYEE,
  GET_AREAS_EMPLOYEES,
  GET_AREAS,
  GET_POSITIONS_EMPLOYEES,
  GET_POSITIONS,
  GET_ROLES,
  GET_ROL_EMPLOYEES,
  SORT_EMPLOYEE_NAME,
  CURRENT_EMPLOYEE,
  GET_FILTER,
  CONTENT_FILTERS,
  CLEAN_URL,
  GET_POSITIONS_NUM,
  GET_AREAS_NUM,
  GET_COMPANIES_CUIT
} from "../action-types/index";

const initialState = {
  allCompanies: [],
  companies: [],
  company: {},
  employeeCreated: [],
  allEmployees: [],
  employeeDetail: {},
  positions: [],
  positionsNum: [],
  areas: [],
  areasNum: [],
  roles: [],
  currentEmployee: {},
  arrContentFilters: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        allCompanies: action.payload,
      };
    case ADD_COMPANY:
      return {
        ...state,
        companies: action.payload,
      };
    case CREATE_EMPLOYEE:
      return {
        ...state,
        employeeCreated: action.payload,
      };
    case RESET_CREATE:
      return {
        ...state,
        employeeCreated: action.payload,
      };
    case GET_EMPLOYEES:
      return {
        ...state,
        allEmployees: action.payload,
      };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
      };
    case GET_EMPLOYEE_DETAIL:
      return {
        ...state,
        employeeDetail: action.payload,
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
      };
    // case GET_AREAS_EMPLOYEES:
    //   return {
    //     ...state,
    //     allEmployees: action.payload,
    //   }
    case GET_AREAS:

      return {
        ...state,
        areas: action.payload,
      };
    case GET_AREAS_NUM:
      return {
        ...state,
        areasNum: action.payload
      }
    case GET_POSITIONS:
      return {
        ...state,
        positions: action.payload,
      };
    case GET_POSITIONS_NUM:
      return {
        ...state,
        positionsNum: action.payload,
      }
    // case GET_POSITIONS_EMPLOYEES:
    //   return {
    //     ...state,
    //     allEmployees: action.payload,
    //   };
    case GET_ROLES:
      return {
        ...state,
        roles: action.payload,
      };
    // case GET_ROL_EMPLOYEES:
    //   return {
    //     ...state,
    //     allEmployees: action.payload,
    //   };
    // case SORT_EMPLOYEE_NAME:
    //   return {
    //     ...state,
    //     allEmployees: action.payload,
    //   };
    case CURRENT_EMPLOYEE:
      return {
        ...state,
        currentEmployee: action.payload,
      };
    case GET_FILTER:
      return {
        ...state,
        // allEmployees: action.payload,
      };
    case CONTENT_FILTERS:
      return {
        ...state,
        arrContentFilters: { ...state.arrContentFilters, ...action.payload },
      };
    case CLEAN_URL:
      return {
        ...state,
        arrContentFilters: {},
      };
    case GET_COMPANIES_CUIT:
      return{
        ...state,
        company: action.payload
      }

    default:
      return state;
  }
}

export default rootReducer;
