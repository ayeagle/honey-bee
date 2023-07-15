
export enum Bank {
    WF = 'WELLS_FARGO',
    BOA = 'BOA',
    SCWHWAB = 'SCWHWAB',
    JPM = 'JPM',
    VISA = 'VISA',
}

export interface Benefits {
    multiplier: number
    bonus_multipliers?: { [key: string]: number };
    signup_threshold: number,
    signup_met: boolean
}

export interface milesBenefits extends Benefits {
    multiplier: number
    bonus_multipliers?: { [key: string]: number };
    signup_threshold: number,
    signup_met: boolean
}

export interface cashBackBenefits extends Benefits {
    multiplier: number
    bonus_multipliers?: { [key: string]: number };
    signup_threshold: number,
    signup_met: boolean
}

export interface pointsBenefits extends Benefits {
    multiplier: number
    bonus_multipliers?: { [key: string]: number };
    signup_threshold: number,
    signup_met: boolean
}

export type Card = {
    name: string
    issuer: Bank
    miles: milesBenefits
    cash: cashBackBenefits
    points: pointsBenefits
    limit: number
    balance: number
}

export type Wallet = Array<Card>