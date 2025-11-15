enum CountPage {
  Call,
  LunarVis,
  LunarPhase
};

enum DateDisplay {
  Year,
  Month,
  Week,
  Day
}

interface CallDataInterface {
  [key: string]: any, 
  total?: number 
}

export {
  CallDataInterface,
  CountPage,
  DateDisplay,
}



