import { GETALLDATA, USERSDATA, ADDUSER } from '../contants/VoteType.js'

export function getUsersData(users) {
  return {
    type: GETALLDATA,
    users: users
  }
}

export function getStoreUsersData() {
  return {
    type: USERSDATA
  }
}

export function addUser(user) {
  return {
    type: ADDUSER,
    user: user
  }
}

