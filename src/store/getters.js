// 存放 getter 函式，只負責取 state 供元件使用

export const getUser = state => {
    return state.userData
}

export const getCourseList = state => {
    return state.courseList
}

export const getAnnounce = state => {
    return state.announceData
}

export const getHomework = state => {
    return state.homeworkData
}

export const getTextbook = state => {
    return state.textbookData
}

export const getSetting = state => {
    return state.settingData
}
