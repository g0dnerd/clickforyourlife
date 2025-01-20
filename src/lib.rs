use std::fmt;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Player {
    wealth: f64,
    rate: f64,
}

#[wasm_bindgen]
impl Player {
    #[allow(clippy::new_without_default)]
    pub fn new() -> Self {
        Self {
            wealth: 0.0,
            rate: 1.0,
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

    pub fn render(&self) -> String {
        self.to_string()
    }

    pub fn render_rate(&self) -> String {
        if self.rate == 1.0 {
            String::from("1")
        } else {
            format!("{:.3}", self.rate)
        }
    }
}

impl fmt::Display for Player {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:.0}", self.wealth)
    }
}
