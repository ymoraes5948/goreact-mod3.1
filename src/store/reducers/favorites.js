const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [
        ...state,
        {
          id: Math.random,
          name: "Facebook/React",
          description: "a jknijhbcjfkhjiklajlfnds",
          url: "https://yurimoraes.com.br"
        }
      ];
    default:
      return state;
  }
}
