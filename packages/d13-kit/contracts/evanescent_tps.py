# pyright: reportMissingModuleSource=false
from algopy import ARC4Contract, Txn, log, op, urange

class EvanescentTps(ARC4Contract, avm_version=11):
    def approval_program(self) -> bool:
        start_round = op.btoi(Txn.application_args(0))
        end_round = op.btoi(Txn.application_args(1))
        for rnd in urange(start_round, end_round + 1):
            log(op.Block.blk_proposer(rnd))
        return True
