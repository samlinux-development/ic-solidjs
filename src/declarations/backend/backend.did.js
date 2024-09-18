export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getLastName' : IDL.Func([], [IDL.Text], ['query']),
    'sayHelloTo' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
