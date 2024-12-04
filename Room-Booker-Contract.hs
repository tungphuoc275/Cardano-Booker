{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE OverloadedStrings   #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE TemplateHaskell     #-}
{-# LANGUAGE ScopedTypeVariables #-}

module Room-Booker-Contract where

import PlutusTx.Prelude
import Plutus.Contract
import Plutus.V1.Ledger.Api
import Plutus.V1.Ledger.Contexts
import Plutus.V1.Ledger.Value
import PlutusTx

data BookingDatum = BookingDatum
    { roomId       :: Integer
    , customerName :: BuiltinByteString
    , checkInDate  :: Integer
    , checkOutDate :: Integer
    } deriving Show

PlutusTx.unstableMakeIsData ''BookingDatum

{-# INLINABLE validateBooking #-}
validateBooking :: BookingDatum -> () -> ScriptContext -> Bool
validateBooking datum _ ctx =
    traceIfFalse "Invalid booking" $
        let info = scriptContextTxInfo ctx
        in isValidDate datum && isValidPayment info datum

isValidDate :: BookingDatum -> Bool
isValidDate datum = checkInDate datum < checkOutDate datum

isValidPayment :: TxInfo -> BookingDatum -> Bool
isValidPayment _ _ = True -- Implement payment validation logic

typedValidator :: Validator
typedValidator = mkValidatorScript
    $$(PlutusTx.compile [|| validateBooking ||])
