import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ActivityLevel } from '../types';

const WaterIntakeCalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [activity, setActivity] = useState<ActivityLevel>(ActivityLevel.Light);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');
  
  const [isReminderOn, setIsReminderOn] = useState(false);
  const reminderIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioCtx = useRef<AudioContext | null>(null);

  const playAlarmSound = () => {
    if (!audioCtx.current) {
        audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const oscillator = audioCtx.current.createOscillator();
    const gainNode = audioCtx.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.current.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audioCtx.current.currentTime); // A sharp note
    gainNode.gain.setValueAtTime(0.5, audioCtx.current.currentTime);

    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.current.currentTime + 1);

    oscillator.start();
    oscillator.stop(audioCtx.current.currentTime + 1);
  };

  const stopReminders = useCallback(() => {
    if (reminderIntervalId.current) {
      clearInterval(reminderIntervalId.current);
      reminderIntervalId.current = null;
    }
    setIsReminderOn(false);
  }, []);

  const startReminders = () => {
    if (result === null || result <= 0) return;
    stopReminders();

    const numGlasses = result / 0.25;
    const wakingHours = 16;
    const intervalMs = (wakingHours / numGlasses) * 60 * 60 * 1000;

    if (intervalMs > 0 && isFinite(intervalMs)) {
      playAlarmSound();
      reminderIntervalId.current = setInterval(playAlarmSound, intervalMs);
      setIsReminderOn(true);
    }
  };
  
  useEffect(() => {
    return () => {
      stopReminders();
    };
  }, [stopReminders]);


  const calculateWaterIntake = useCallback(() => {
    stopReminders();
    const weightNum = parseFloat(weight);
    const ageNum = parseInt(age, 10);

    if (isNaN(weightNum) || weightNum <= 0 || isNaN(ageNum) || ageNum <= 0) {
      setError('Please enter valid positive numbers for weight and age.');
      setResult(null);
      return;
    }
    setError('');

    let baseIntake = weightNum * 35; // mL

    if (ageNum > 55) baseIntake = weightNum * 30;
    else if (ageNum < 30) baseIntake = weightNum * 40;

    let activityMultiplier = 1;
    if (activity === ActivityLevel.Moderate) activityMultiplier = 1.2;
    else if (activity === ActivityLevel.Heavy) activityMultiplier = 1.4;

    const finalIntakeLiters = (baseIntake * activityMultiplier) / 1000;
    setResult(finalIntakeLiters);
  }, [weight, age, activity, stopReminders]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateWaterIntake();
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 text-center">Daily Water Intake Calculator</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
          <input
            type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g., 70"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
            required
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age (years)</label>
          <input
            type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)}
            placeholder="e.g., 30"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Activity Level</label>
          <div className="grid grid-cols-3 gap-2 rounded-lg bg-gray-100 p-1">
            {(Object.keys(ActivityLevel) as Array<keyof typeof ActivityLevel>).map((key) => (
                <button
                    key={key} type="button" onClick={() => setActivity(ActivityLevel[key])}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition capitalize ${
                        activity === ActivityLevel[key] ? 'bg-primary text-white shadow' : 'text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    {ActivityLevel[key]}
                </button>
            ))}
          </div>
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Calculate
        </button>
      </form>
      {result !== null && (
        <div className="mt-8 p-6 bg-accent rounded-lg text-center">
          <p className="text-lg text-dark">Your recommended daily water intake is:</p>
          <p className="text-4xl font-extrabold text-primary my-2">{result.toFixed(2)} Liters</p>
          <p className="text-md text-gray-600">This is approximately {(result / 0.25).toFixed(0)} glasses (250ml each).</p>
        
          <div className="mt-6 pt-6 border-t border-secondary text-left">
            <h3 className="text-lg font-semibold text-dark text-center mb-2">Suggested Schedule & Reminders</h3>
            <p className="text-gray-700 text-center text-sm">Drink 1 glass (250ml) approximately every <strong>{ (16 / (result/0.25)).toFixed(1) } hours</strong> during your waking hours to stay on track.</p>
            <div className="mt-4">
              {isReminderOn ? (
                <button onClick={stopReminders} className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition">
                  <i className="fas fa-stop-circle mr-2"></i>Stop Reminders
                </button>
              ) : (
                <button onClick={startReminders} className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition">
                  <i className="fas fa-play-circle mr-2"></i>Start Reminders
                </button>
              )}
               <p className="text-xs text-gray-500 mt-2 text-center">Reminders are audio-only and work while this page is open.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaterIntakeCalculator;