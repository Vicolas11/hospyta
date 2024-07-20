import { ReactNode, createContext, useReducer } from "react";

export interface IExpense {
  expenseId: string;
  title: string;
  date: Date;
  amount: number;
}

interface IExpenseContext {
  expenseArr: IExpense[];
  addExpense: (expense: Omit<IExpense, "expenseId">) => void;
  updateExpense: (mealId: string, expense: IExpense) => void;
  removeExpense: (mealId: string) => void;
}

export const ExpenseContext = createContext<IExpenseContext>({
  expenseArr: [],
  addExpense: (expense: Omit<IExpense, "expenseId">) => {},
  updateExpense: (expenseId: string, expense: IExpense) => {},
  removeExpense: (expenseId: string) => {},
});

interface IExpenseAction {
  type: "add" | "update" | "remove";
  payload: {
    expenseId?: string;
    expense?: IExpense;
  };
}

const expenseReducer = (
  state: IExpense[],
  action: IExpenseAction
): IExpense[] => {
  const { type, payload } = action;

  switch (type) {
    case "add":
      if (payload.expense) return [payload.expense, ...state];
    case "update":
      if (!payload.expense) return state;
      const updatedExpenses = state.map((expense) => {
        if (expense.expenseId === payload.expenseId && payload.expense) {
          return {
            ...expense,
            amount: payload.expense.amount,
            title: payload.expense.title,
            date: payload.expense.date,
          };
        }

        return expense;
      });
      
      return updatedExpenses;
    case "remove":
      return state.filter((d) => d.expenseId !== payload.expenseId);
    default:
      return state;
  }
};

export const ExpenseContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(expenseReducer, []);
  const rand = Math.floor(Math.random() * 10000 + 1000);

  const addExpense = (expense: Omit<IExpense, "expenseId">) => {
    const newExpense = {
      expenseId: `${rand}`,
      ...expense,
    };

    dispatch({ type: "add", payload: { expense: newExpense } });
  };

  const updateExpense = (expenseId: string, expense: IExpense) => {
    dispatch({ type: "update", payload: { expenseId, expense } });
  };

  const removeExpense = (expenseId: string) => {
    dispatch({ type: "remove", payload: { expenseId } });
  };

  return (
    <ExpenseContext.Provider
      value={{ expenseArr: state, addExpense, updateExpense, removeExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
