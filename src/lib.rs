use std::fmt;

use wasm_bindgen::prelude::*;

const EXHAUSTION_LIMITS: [usize; 4] = [10, 25, 45, 70];

#[wasm_bindgen]
pub struct Player {
    wealth: f64,
    rate: f64,
    worked: usize,
    exhaustion_level: usize,
}

#[wasm_bindgen]
impl Player {
    #[allow(clippy::new_without_default)]
    pub fn new() -> Self {
        Self {
            wealth: 0.0,
            rate: 1.0,
            worked: 0,
            exhaustion_level: 0,
        }
    }

    pub fn tick(&mut self) {
        self.wealth += self.rate;
    }

    pub fn bump(&mut self, amount: f64) {
        self.wealth -= amount;
    }

    pub fn increase_rate(&mut self, amount: f64) {
        self.rate += amount;
    }

    pub fn work(&mut self) -> usize {
        self.worked += 1;
        if self.worked >= EXHAUSTION_LIMITS[self.exhaustion_level] {
            self.exhaustion_level += 1;
        }
        self.exhaustion_level
    }

    pub fn render(&self) -> String {
        self.to_string()
    }

    pub fn render_rate(&self) -> String {
        if self.rate.fract() == 0.0 {
            format!("{}", self.rate.trunc() as u64)
        } else {
            format!("{:.2}", self.rate)
        }
    }
}

impl fmt::Display for Player {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:.0}", self.wealth)
    }
}
