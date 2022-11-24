import SectionHeading from '../../../components/SectionHeading'
//import TokenInfo from './TokenInfo'

const SecDistribution = ({img}) => {

  return (
    <section className="token-distribution pd-t70">
        <div className="container">
            
            <SectionHeading
                title='TOKENOMICS'
            />

            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="token-allocation">
                    <img src={img} className="center-block" alt="" />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="token-info-wapper"></div>
                <div className='info-tokenomics'>
                    Reward Pool will be locked in the game smart contract and be withdrawable by users in the amount of what they earned in the daily competitions.
                 <br />    <br />  Reserved: 500,000 tokens were paid as pinksale commission. 350,000 tokens will be used for strategic partnerships. is only 0.85% of the supply.
                </div>      
                <div className='cap'>
                Maximum Cap: 100.000.000 $BTE
                </div>     
                <div className='tax'>
                Tax: <span>Buy 2% < br />
Sell 50%</span>
                </div>          
            </div>
        </div>
        
    </section>
  );
}

export default SecDistribution;