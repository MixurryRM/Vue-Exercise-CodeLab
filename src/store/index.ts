import { createStore } from 'vuex'

export default createStore({
  state: {
    name: 'Hello',
    myName: 'Yair Min Thway',
    fruits: ['apple', 'mango', 'banana'],
    user: [{
      id: '1',
      name: 'Tun Tun',
      job: 'doctor',
      workingHour: '24hr',
      isDone: false,
    },
      {
        id: '2',
        name: 'Mixurry RM',
        job: 'programming',
        workingHour: '8hr',
        isDone: true,
      },
      {
        id: '3',
        name: 'Kyaw Kyaw',
        job: 'engineer',
        workingHour: '12hr',
        isDone: false,
      },
      {
        id: '4',
        name: 'Yair Min Thway',
        job: 'thinking',
        workingHour: '0hr',
        isDone: true,
      }
    ]
  },
  getters: {
    getUserCount: state => state.user.length,
    doneJob: state => state.user.filter(x => x.isDone === true),
    undoneJob: (state, getters) => getters.getUserCount - getters.doneJob.length,
  },
  mutations: {
    changeNameWithMutation: state => state.name = 'Mutation Yair',
    changeValueWithMutation: (state,value) => state.name = value,
  },
  actions: {
    changeName: ({state}) => state.name = 'Update Yair',
    changeStateName: ( {state} , value) =>  state.name = value,
  },
  modules: {
  }
})
