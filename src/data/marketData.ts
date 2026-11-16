export const marketQuotes = [
 { pair:'EUR/USD', name:'Euro / US Dollar', price:1.08426, change:0.24, spread:'0.8' },
 { pair:'GBP/USD', name:'British Pound / US Dollar', price:1.26714, change:-0.18, spread:'1.1' },
 { pair:'USD/JPY', name:'US Dollar / Japanese Yen', price:149.382, change:0.31, spread:'0.9' },
 { pair:'XAU/USD', name:'Gold / US Dollar', price:2034.82, change:0.62, spread:'2.4' },
 { pair:'AUD/USD', name:'Australian Dollar / US Dollar', price:0.65382, change:-0.11, spread:'1.0' },
 { pair:'BTC/USD', name:'Bitcoin / US Dollar', price:67428.5, change:1.42, spread:'8.5' },
];
export const chartData = Array.from({length:28},(_,i)=>({time:`${String(i+1).padStart(2,'0')}:00`,price:1.079+Math.sin(i*.55)*.002+i*.00018}));
