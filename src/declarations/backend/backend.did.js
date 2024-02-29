export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'bmi' : IDL.Func([IDL.Float64, IDL.Float64], [IDL.Float64], ['query']),
    'sayHelloTo' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
