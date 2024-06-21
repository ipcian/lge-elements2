

export const useNoAction = () => {

    const noAction = () => {
        console.log("noAction")
    }

    const noPlaceHolder = ""

    return {
        noAction,
        noPlaceHolder
    }
}
