import React from "react";
import * as Components from './Components';
 import './Styles.css'
function App() {
    const [signIn, toggle] = React.useState(true);
     return(
        <div class="k">
        <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
        <Components.Title>Sign In</Components.Title>
        <Components.Input type='text' placeholder='Email' />
        <Components.Input type='email' placeholder='Password' />
        <Components.Button>Sign In</Components.Button>
        </Components.Form>
        </Components.SignUpContainer>
        
        <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
        <Components.Title>Sign In</Components.Title>
        <Components.Input type='email' placeholder='Email' />
        <Components.Input type='password' placeholder='Password' />
        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
        <Components.Button>Sigin In</Components.Button>
        </Components.Form>
        </Components.SignInContainer>
        
        <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
        
        <Components.LeftOverlayPanel signinIn={signIn}>
        <Components.Title>Hello Admin!</Components.Title>
        <Components.Paragraph>
        To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                         </Components.GhostButton>
                         </Components.LeftOverlayPanel>
                         
                         <Components.RightOverlayPanel signinIn={signIn}>
                         <Components.Title>Hello User!</Components.Title>
                         <Components.Paragraph>
        Enter Your personal details and start journey with us
                         </Components.Paragraph>
                         <Components.GhostButton onClick={() => toggle(false)}>
                         Sigin In
                         </Components.GhostButton> 
                         </Components.RightOverlayPanel>
                         
                         </Components.Overlay>
                         </Components.OverlayContainer>
                         
                         </Components.Container>
                         </div>
                         )
                        }
                        
                        export default App;