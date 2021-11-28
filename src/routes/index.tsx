import { Switch } from 'react-router-dom'

import { Route } from './Route'

import { Collaborator } from '../pages/Collaborator'
import { CollaboratorDetail } from '../pages/Collaborator/detail'
//import { CollaboratorCreate } from '../pages/Collaborator/create'
import { Dashboard } from '../pages/Dashboard'
import { SignIn } from '../pages/SignIn'
import { Training } from '../pages/Training'
// import { UploadBox } from '../components/UploadBox'
import { CollaboratorCreate } from '../pages/Collaborator/create'

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/dashboard" component={Dashboard} isPrivate exact />
      <Route
        path="/collaborator/create"
        component={CollaboratorCreate}
        isPrivate
        exact
      />
      <Route
        path="/collaborator/detail/:id"
        component={CollaboratorDetail}
        isPrivate
        exact
      />
      <Route path="/collaborator" component={Collaborator} isPrivate exact />
      <Route path="/training" component={Training} isPrivate exact />
      {/* <Route path="/upload" component={UploadBox} isPrivate exact /> */}
    </Switch>
  )
}
