from dataclasses import dataclass
from datetime import datetime
import tokenvalue

@dataclass
class Transaction:
    id: int
    tx_hash: str
    output_index: int
    amount: float
    senderAdress: str
    status: str
    created: datetime
