
export enum ActivityLevel {
  Light = 'light',
  Moderate = 'moderate',
  Heavy = 'heavy',
}

export enum Gender {
  Male = 'male',
  Female = 'female',
}

export interface eGFRResult {
  value: number | null;
  category: 'Normal' | 'Mild to Moderate' | 'Severe' | null;
  explanation: string;
}
