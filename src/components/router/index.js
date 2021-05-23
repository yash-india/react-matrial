import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";


const router = (props) => {
    return (
        <BrowserRouter>
        {bar}

        <Switch>
          <Route path="/" exact>
            <HomePage user={user} openSnackbar={openSnackbar} />
          </Route>

          <Route path="/admin">
            {user && roles.includes("admin") ? (
              <AdminPage />
            ) : (
              <Redirect to="/" />
            )}
          </Route>

          <Route path="/user/:userId">
            {user ? <UserPage /> : <Redirect to="/" />}
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    )
}