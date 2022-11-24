/* eslint-disable jsx-a11y/anchor-is-valid */
import {Tl} from "../../../../utils/allImgs"


function SecWelcomeContent({img}){
  return(
      <div className="welcome-content">
         
          <h1>Guess the <span className="text-hl">WINNER</span> , be rewarded with $BTE!
            </h1>
          <p>
          Actually, BTE is not providing a betting service. It is totally free to play 'prediction' game. Plus, it is a passive income generator. All you have to do buying a NFT (Betting Slip) in return 10K $BTE token and keeping it on your wallet! Then, join our daily competitions in the game. Really unbelieveble, huh?
          </p>
          <div className="dream-btn-group">
              <a href="/app1" className="btn-same btn  mr-3 ">
              
              <img src={Tl} width="24" height="24" alt="" />
                     <span> Launch App</span>
              </a>
          </div>
      </div>
  )
}

export default SecWelcomeContent